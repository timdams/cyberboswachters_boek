import os
import shutil
import re
import subprocess
import yaml

# Configuration
SOURCE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SOURCE_DIR)
SITE_DIR = os.path.join(PROJECT_ROOT, "site_source")
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "site")

# File list (Must match build.sh / pandocbook.bat)
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
    "appendix/meerweten.md",
    "appendix/darkweb.md",
    "appendix/awareness.md",
    "bronnen.md"
]

# Mapping Pandoc divs to MkDocs admonitions
# Pandoc: ::: note ... :::
# MkDocs: !!! note ...
ADMONITION_MAP = {
    "note": "note",
    "tip": "tip",
    "warning": "warning",
    "caution": "failure", # MkDocs doesn't have caution, failure is close to red
    "important": "important" 
}

def clean_and_prepare_dir():
    if os.path.exists(SITE_DIR):
        shutil.rmtree(SITE_DIR)
    os.makedirs(SITE_DIR)
    
    # Copy assets
    assets_src = os.path.join(SOURCE_DIR, "assets")
    assets_dst = os.path.join(SITE_DIR, "assets")
    if os.path.exists(assets_src):
        shutil.copytree(assets_src, assets_dst)

def convert_markdown(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Regex to handle Pandoc Divs: ::: type \n content \n :::
    # We need to turn them into: !!! type \n    content
    
    # Simple regex for finding block starts
    # Matches ::: type
    content = re.sub(r'^::: \s*(\w+)', lambda m: f'!!! {ADMONITION_MAP.get(m.group(1), "note")}', content, flags=re.MULTILINE)
    
    # Matches closing :::
    # In MkDocs, we don't need a closing tag if indentation is used, but Pandoc divs usually don't enforce indentation.
    # However, for simplicity in this conversion script, since the original markdown likely doesn't have indented content for divs:
    # We might need a more robust parser if the content isn't indented.
    # BUT, let's assume standard Pandoc usage. 
    # Actually, converting unindented content to indented is hard with regex.
    # Alternative: Use pymdownx.blocks extension which supports wrapping content? 
    # Or just indent everything between start and end?
    
    lines = content.split('\n')
    new_lines = []
    in_block = False
    
    for line in lines:
        if line.strip().startswith('!!!'):
            in_block = True
            new_lines.append(line)
        elif line.strip() == ':::':
            in_block = False
            # Don't append the closing tag, it's implied by indentation ending (or we rely on double newline)
            new_lines.append('') 
        else:
            if in_block:
                new_lines.append('    ' + line)
            else:
                new_lines.append(line)
                
    return '\n'.join(new_lines)

def process_files():
    nav = [{"Home": "index.md"}]
    
    # Create an index.md from intro.md? Or just make first file index?
    # Let's map intro.md to index.md
    
    for filename in FILES:
        src_path = os.path.join(SOURCE_DIR, filename)
        
        # Determine dest path
        if filename == "intro.md":
            dest_name = "index.md"
        else:
            dest_name = filename
            
        dest_path = os.path.join(SITE_DIR, dest_name)
        
        # Ensure subdir exists
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        
        # Convert and write
        converted_content = convert_markdown(src_path)
        with open(dest_path, "w", encoding="utf-8") as f:
            f.write(converted_content)
            
        # Add to nav (Basic Implementation)
        # Extract title from first line # Title
        title = dest_name
        first_line = converted_content.split('\n')[0]
        if first_line.startswith('# '):
            title = first_line[2:].strip()
            
        nav.append({title: dest_name})

    return nav

def create_mkdocs_yml(nav):
    config = {
        "site_name": "Cyberboswachters",
        "site_url": "",
        "theme": {
            "name": "material",
            "features": ["navigation.sections", "toc.integrate"],
            "palette": {
                "scheme": "default",
                "primary": "teal",
                "accent": "purple" 
            }
        },
        "markdown_extensions": [
            "admonition",
            "pymdownx.details",
            "pymdownx.superfences",
            "toc"
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
    print("Done! Site built in 'site' directory.")
