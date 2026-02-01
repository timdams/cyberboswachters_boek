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
    # This places assets at the root of the site structure
    assets_dst = os.path.join(SITE_DIR, "assets")
    if os.path.exists(ASSETS_DIR):
        shutil.copytree(ASSETS_DIR, assets_dst)

def fix_image_paths(content, file_relative_path):
    """
    Pandoc allows --resource-path. MkDocs doesn't.
    If a markdown file refers to 'crypto/img.png' and it's actually in 'assets/crypto/img.png',
    we need to rewrite the link to point to the assets folder using relative paths.
    
    file_relative_path: e.g. "1_cryptografie/basics.md"
    """
    
    # Calculate depth to know how many ../ to add
    # "intro.md" -> 0 depth -> ./assets/...
    # "folder/file.md" -> 1 depth -> ../assets/...
    depth = file_relative_path.count('/') + file_relative_path.count('\\')
    prefix = "../" * depth + "assets/"
    
    def replace_link(match):
        alt_text = match.group(1)
        original_path = match.group(2)
        
        # skip absolute or web links
        if original_path.startswith(('http', 'https', '/', 'mailto:')):
            return match.group(0)
            
        # check if it looks like an asset path (user provides 'crypto/image.png')
        # We assume if it's not a local sibling, it's in assets.
        # Actually, let's just check if the file exists in assets.
        asset_check_path = os.path.join(ASSETS_DIR, original_path)
        
        # Normalize slashes
        asset_check_path = os.path.normpath(asset_check_path)
        
        if os.path.exists(asset_check_path):
            # It maps to an asset! rewrite.
            new_path = prefix + original_path
            # Special case for windows paths in python strings, ensure forward slashes for web
            new_path = new_path.replace('\\', '/')
            return f"![{alt_text}]({new_path})"
            
        return match.group(0)

    # Markdown image regex: ![alt](url)
    # Also handles { width=... } attributes standard in Pandoc
    # We might need to keep the attributes or move them? 
    # MkDocs material supports attr_list extension: {: .class_name width="300" } or similar
    # But Pandoc uses { width=90% }. standard markdown ignores it.
    # Let's just fix the path first.
    return re.sub(r'!\[(.*?)\]\((.*?)\)', replace_link, content)

def convert_markdown(src_path, relative_path):
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
    content = fix_image_paths(content, relative_path)
    
    return content

def slugify(value):
    """
    Normalizes string, converts to lowercase, removes non-alpha characters,
    and converts spaces to hyphens.
    This mimics Python-Markdown's default slugify.
    """
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value.lower())
    return re.sub(r'[-\s]+', '-', value).strip('-')

def get_headers(path):
    """
    Returns a list of (level, title) tuples using strict regex to match CommonMark headers.
    """
    headers = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            # CommonMark ATX headers: sequence of 1-6 # characters, optional spaces/tabs, then content
            match = re.match(r'^(#{1,6})\s+(.*)', line.strip())
            if match:
                level = len(match.group(1))
                title = match.group(2).strip()
                if level <= 2: # Keep logic simple: H1 and H2
                    headers.append((level, title))
    return headers

def process_files():
    nav = []
    current_section_list = None
    
    # We must maintain the order of FILES.
    # Logic:
    # 1. Iterate files.
    # 2. Parse headers.
    # 3. Build Nav tree based on H1 > H2 structure.
    # 4. Ignore directories, utilize H1 as grouping sections.
    
    for filename in FILES:
        src_path = os.path.join(SOURCE_DIR, filename)
        
        # Determine dest path
        if filename == "intro.md":
            dest_name = "index.md"
            dest_path = os.path.join(SITE_DIR, dest_name)
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            converted_content = convert_markdown(src_path, filename)
            with open(dest_path, "w", encoding="utf-8") as f:
                f.write(converted_content)
            
            nav.append({"Home": "index.md"})
            continue
            
        else:
            dest_name = filename.replace('\\', '/')
            dest_path = os.path.join(SITE_DIR, dest_name)
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            
            converted_content = convert_markdown(src_path, filename)
            with open(dest_path, "w", encoding="utf-8") as f:
                f.write(converted_content)
            
            # Extract headers for Navigation
            headers = get_headers(src_path)
            
            for level, title in headers:
                anchor = slugify(title)
                
                if level == 1:
                    # Start new Site Section (Top Level Navigation Key)
                    current_section_list = []
                    nav.append({title: current_section_list})
                    
                    # Add current file as the "Index" for this section.
                    # With navigation.indexes, this item becomes the link for the Section Name
                    # and is hidden from the dropdown list.
                    current_section_list.append({title: dest_name})
                    
                elif level == 2:
                    # Add Item to current Section
                    if current_section_list is not None:
                        # Link to specific anchor in the file
                        current_section_list.append({title: f"{dest_name}#{anchor}"})
                    else:
                        # Fallback: orphan H2 (shouldn't happen if structure is correct)
                        # Maybe append to root? Or ignore?
                        # Let's append to root for safety but it acts weird in MkDocs if mixed.
                        pass

    return nav

def create_mkdocs_yml(nav):
    config = {
        "site_name": "Cyberboswachters",
        "site_url": "",
        "docs_dir": "site_source",
        "theme": {
            "name": "material",
            "features": ["navigation.sections", "toc.integrate", "navigation.expand", "navigation.indexes"],
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
