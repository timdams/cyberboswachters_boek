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

def slugify(value):
    # Robust slugify
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = value.lower()
    value = re.sub(r'[^\w\s-]', '', value)
    return re.sub(r'[-\s]+', '-', value).strip('-')

def process_and_convert_markdown(src_path, dest_relative_path):
    """
    Reads markdown, converts it (admonitions, images), 
    AND rewrites H2 headers with explicit attributes {: #slug }
    Returns: (converted_content, list_of_headers)
    list_of_headers: [(level, title, slug), ...]
    """
    with open(src_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Convert Pandoc Divs to Admonitions
    content = re.sub(r'^::: \s*(\w+)', lambda m: f'!!! {ADMONITION_MAP.get(m.group(1), "note")}', content, flags=re.MULTILINE)
    
    lines = content.split('\n')
    new_lines = []
    headers = []
    
    in_block = False
    
    for line in lines:
        stripped = line.strip()
        
        # Check for headers
        # We only care about H1 and H2 for navigation
        # But we need to inject IDs for H2 to ensure links work
        header_match = re.match(r'^(#{1,6})\s+(.*)', stripped)
        
        if header_match:
            level = len(header_match.group(1))
            title_text = header_match.group(2).strip()
            
            # Remove any existing attribute list if present (e.g. {#id}) to avoid duplication
            # Simple check: ends with }
            title_clean = re.sub(r'\s*\{.*?\}\s*$', '', title_text)
            
            if level <= 2:
                # Generate Slug
                slug = slugify(title_clean)
                headers.append((level, title_clean, slug))
                
                # Rewrite line with explicit ID
                # This guarantees that the anchor on the page is EXACTLY 'slug'
                # Markdown extension 'attr_list' needed in mkdocs.yml
                new_line = f"{'#' * level} {title_clean} {{#{slug}}}"
                new_lines.append(new_line)
            else:
                new_lines.append(line) # Keep H3+ as is
                
        elif stripped.startswith('!!!'):
            in_block = True
            new_lines.append(line)
        elif stripped == ':::':
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
    
    return content, headers

def process_files():
    nav = []
    current_section_list = None
    current_folder = ""
    
    for filename in FILES:
        src_path = os.path.join(SOURCE_DIR, filename)
        
        # Determine destination first (guessing H1, but we need to READ file to get H1)
        # We can read file temporarily or just update the logic to read once.
        # Let's read once. BUT we need to know where to save it.
        # Chicken and egg: to know folder, we need H1.
        # Let's read H1 from raw file quickly.
        temp_headers = []
        with open(src_path, "r", encoding="utf-8") as f:
             for line in f:
                 m = re.match(r'^#\s+(.*)', line.strip())
                 if m:
                     temp_headers.append(m.group(1).strip())
                     break
        h1_raw = temp_headers[0] if temp_headers else None
        
        # Calculate paths
        if h1_raw:
             if filename == "intro.md":
                dest_relative = "index.md"
                current_folder = ""
                nav_label = "Introductie"
             else:
                current_folder = slugify(h1_raw)
                dest_relative = f"{current_folder}/index.md"
                nav_label = h1_raw
        else:
             base_name = os.path.splitext(os.path.basename(filename))[0] + ".md"
             if current_folder:
                 dest_relative = f"{current_folder}/{base_name}"
             else:
                 dest_relative = os.path.basename(filename)

        # Process Content & Get precise headers/slugs
        converted_content, headers = process_and_convert_markdown(src_path, dest_relative)
        
        # Create Output Dir
        dest_path = os.path.join(SITE_DIR, dest_relative)
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        
        # Write Content
        with open(dest_path, "w", encoding="utf-8") as f:
            f.write(converted_content)
        
        # Build Navigation using the headers/slugs we just generated/injected
        
        # 1. Handle Section / Page setup
        if h1_raw: # New Section
            current_section_list = []
            nav.append({nav_label: current_section_list})
            current_section_list.append({nav_label: dest_relative})
        else: # Sub Page
            # Find Title (First H2 or fallback)
            first_h2 = next((title for lvl, title, slug in headers if lvl == 2), None)
            page_title = first_h2 if first_h2 else os.path.basename(filename)
            
            if current_section_list is not None:
                new_sub_list = []
                new_sub_list.append({page_title: dest_relative})
                current_section_list.append({page_title: new_sub_list})

        # 2. Add H2 Links
        for lvl, title, slug in headers:
            if lvl == 2:
                link = f"{dest_relative}#{slug}"
                if h1_raw: # Index Page
                     if current_section_list is not None:
                        current_section_list.append({title: link})
                else: # Sub Page
                     if current_section_list is not None:
                         # Append to last item's sublist
                         last_item = current_section_list[-1] # {page_title: [list]}
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
                "navigation.expand"
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
            "attr_list" # CRITICAL for {: #slug } support
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
