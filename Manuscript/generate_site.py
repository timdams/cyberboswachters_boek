import os
import shutil
import re
import subprocess
import yaml
import unicodedata

# Configuration
SOURCE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SOURCE_DIR)
SITE_DIR = os.path.join(PROJECT_ROOT, "site_source")
ASSETS_DIR = os.path.join(SOURCE_DIR, "assets")

# File list (Must match build.sh direction)
FILES = [
    "intro.md",
    "0_het_security_landschap/les1_wordtheterger.md",
    "0_het_security_landschap/2_basicsec.md",
    "1_cryptografie/basics.md",
    "1_cryptografie/publiccrypto.md",
    "3_netwerk_security/wifi.md",
    "1_cryptografie/authenticatie.md",
    "5_iot/iotintro.md",
    "0_het_security_landschap/3_gdpr.md",
    "appendix/darkweb.md",
    "appendix/awareness.md",
    "appendix/meerweten.md",
    "bronnen.md"
]

ADMONITION_MAP = {
    "note": "note",
    "tip": "tip",
    "warning": "warning",
    "caution": "failure",
    "important": "important" 
}

def clean_and_prepare_dir():
    if os.path.exists(SITE_DIR):
        shutil.rmtree(SITE_DIR)
    os.makedirs(SITE_DIR)
    
    # Copy assets to site_source/assets
    assets_dst = os.path.join(SITE_DIR, "assets")
    if os.path.exists(ASSETS_DIR):
        shutil.copytree(ASSETS_DIR, assets_dst)

def fix_image_paths(content, dest_relative_path):
    """
    dest_relative_path: path relative to SITE_DIR (e.g. "cryptografie/index.md")
    """
    # Normalize slashes
    dest_relative_path = dest_relative_path.replace('\\', '/')
    depth = dest_relative_path.count('/')
    
    if depth == 0:
        prefix = "assets/"
    else:
        prefix = "../" * depth + "assets/"
    
    def replace_link(match):
        alt_text = match.group(1)
        original_path = match.group(2)
        
        if original_path.startswith(('http', 'https', '/', 'mailto:')):
            return match.group(0)
            
        # Check against source ASSETS_DIR to see if it's a valid asset
        asset_check_path = os.path.join(ASSETS_DIR, original_path)
        asset_check_path = os.path.normpath(asset_check_path)
        
        if os.path.exists(asset_check_path):
            new_path = prefix + original_path
            new_path = new_path.replace('\\', '/')
            return f"![{alt_text}]({new_path})"
            
        return match.group(0)

    return re.sub(r'!\[(.*?)\]\((.*?)\)', replace_link, content)

def convert_markdown(src_path, dest_relative_path):
    with open(src_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Convert Pandoc Divs to Admonitions
    content = re.sub(r'^::: \s*(\w+)', lambda m: f'!!! {ADMONITION_MAP.get(m.group(1), "note")}', content, flags=re.MULTILINE)
    
    lines = content.split('\n')
    new_lines = []
    in_block = False
    
    for line in lines:
        if line.strip().startswith('!!!'):
            in_block = True
            new_lines.append(line)
        elif line.strip() == ':::':
            in_block = False
            new_lines.append('') 
        else:
            if in_block:
                new_lines.append('    ' + line)
            else:
                new_lines.append(line)
    
    content = '\n'.join(new_lines)
    
    # 2. Fix Image Paths
    content = fix_image_paths(content, dest_relative_path)
    
    return content

def slugify(value):
    # Mimic Python-Markdown's default slugify:
    # 1. Normalize
    # 2. Convert to lowercase
    # 3. Replace spaces with hyphens
    # 4. Remove all other non-alphanumeric characters (except hyphens)
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = value.lower()
    value = re.sub(r'[^\w\s-]', '', value)
    return re.sub(r'[-\s]+', '-', value).strip('-')

def get_headers(path):
    headers = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            match = re.match(r'^(#{1,6})\s+(.*)', line.strip())
            if match:
                level = len(match.group(1))
                title = match.group(2).strip()
                if level <= 2:
                    headers.append((level, title))
    return headers

def process_files():
    nav = []
    current_section_list = None
    current_folder = ""
    
    for filename in FILES:
        src_path = os.path.join(SOURCE_DIR, filename)
        headers = get_headers(src_path)
        
        # Identify H1
        h1_title = None
        for level, title in headers:
            if level == 1:
                h1_title = title
                break
        
        if h1_title:
            # New Section
            if filename == "intro.md":
                dest_relative = "index.md"
                current_folder = ""
                nav_label = "Introductie"
            else:
                current_folder = slugify(h1_title)
                dest_relative = f"{current_folder}/index.md"
                nav_label = h1_title
            
            # Start nav section
            current_section_list = []
            nav.append({nav_label: current_section_list})
            
            # Add index page (Hidden via navigation.indexes in mkdocs.yml)
            current_section_list.append({nav_label: dest_relative})
            
        else:
            # File without H1 (sub-page)
            # Find title (First H2 or filename)
            first_h2 = next((title for lvl, title in headers if lvl == 2), None)
            page_title = first_h2 if first_h2 else os.path.basename(filename)
            
            if current_folder:
                 base_name = os.path.splitext(os.path.basename(filename))[0] + ".md"
                 dest_relative = f"{current_folder}/{base_name}"
            else:
                 dest_relative = os.path.basename(filename)
            
            # Add to list
            if current_section_list is not None:
                # We need to restructure this to allow children for THIS page
                # If we just append {Title: Dest}, it's a leaf.
                # We want {Title: [ {Title: Dest}, {Header: Link}, ... ]}
                # This makes "Title" a folder/expandable item.
                
                new_sub_list = []
                new_sub_list.append({page_title: dest_relative}) # The page link itself
                current_section_list.append({page_title: new_sub_list})

        # Write File
        dest_path = os.path.join(SITE_DIR, dest_relative)
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        convert_markdown(src_path, dest_relative) # Reading content happens inside
        # Actually convert_markdown returns content, we definitely need to write it
        converted = convert_markdown(src_path, dest_relative)
        with open(dest_path, "w", encoding="utf-8") as f:
            f.write(converted)
            
        # Add Anchor links
        for level, title in headers:
            if level == 2:
                anchor = slugify(title)
                link = f"{dest_relative}#{anchor}"
                
                if h1_title:
                    # Is index page -> Add directly to current_section_list
                     if current_section_list is not None:
                        current_section_list.append({title: link})
                else:
                    # Is sub-page -> Add to the last item's list
                    if current_section_list is not None:
                        # Last item is {Title: [List]}
                         last_item = current_section_list[-1]
                         # We know the key is page_title (calculated above)
                         # To be safe, get the value of the only key
                         sub_list = list(last_item.values())[0]
                         sub_list.append({title: link})

    return nav

def create_mkdocs_yml(nav):
    config = {
        "site_name": "Cyberboswachters",
        "site_url": "",
        "docs_dir": "site_source",
        "theme": {
            "name": "material",
            "features": [
                "navigation.sections", 
                "navigation.expand", 
                "navigation.indexes" 
            ],
            "palette": {
                "scheme": "default",
                "primary": "teal",
                "accent": "purple" 
            },
            "icon": {
                "admonition": {
                    "note": "fontawesome/solid/note-sticky",
                    "zip": "fontawesome/solid/file-zipper"
                }
            }
        },
        "markdown_extensions": [
            "admonition",
            "pymdownx.details",
            "pymdownx.superfences",
            "toc",
            "attr_list" 
        ],
        "nav": nav
    }
    
    with open(os.path.join(PROJECT_ROOT, "mkdocs.yml"), "w", encoding="utf-8") as f:
        yaml.dump(config, f, sort_keys=False)

def build_site():
    print("Building MkDocs site...")
    subprocess.run(["mkdocs", "build"], cwd=PROJECT_ROOT, check=True)

if __name__ == "__main__":
    print("Preparing site directory...")
    clean_and_prepare_dir()
    print("Processing files...")
    nav_structure = process_files()
    print("Generating configuration...")
    create_mkdocs_yml(nav_structure)
    print("Building...")
    build_site()
    print("Done!")
