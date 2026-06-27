import os
import re

# ============================================================
# CONFIG: map category IDs to their image folder paths
# ============================================================
CATEGORY_FOLDERS = {
    'character': 'images/portfolio/character/',
    'character2': 'images/portfolio/character2/',
    'character3': 'images/portfolio/character3/',
    'illustration': 'images/portfolio/illustration/',
    'pixel': 'images/portfolio/pixel/',
    'design': 'images/portfolio/design/',
    '3d': 'images/portfolio/3d/',
    'archive': 'images/portfolio/archive/'
}

ALLOWED_EXT = ('.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg')
DATA_JS_PATH = 'js/data.js'

# ============================================================

def get_image_files(folder):
    if not os.path.isdir(folder):
        print(f"   [WARN] Folder does NOT exist: {folder}")
        return []
    files = []
    for f in os.listdir(folder):
        if f.lower().endswith(ALLOWED_EXT):
            files.append(folder + f)
    print(f"   [FOUND] {len(files)} image(s) in {folder}")
    return sorted(files)

def find_images_array(text, category_id):
    """
    Find the images array for a given category.
    Returns (start_index, end_index, inner_text) where inner_text
    is the content between the brackets (excluding the brackets).
    """
    # 1. Find the category block: "id: 'category_id'"
    pattern = rf"id:\s*['\"]{category_id}['\"]"
    match = re.search(pattern, text)
    if not match:
        raise ValueError(f"Category ID '{category_id}' not found in data.js")
    pos = match.end()

    # 2. Find the first 'images:' key after that position
    # We need to search for 'images:' that is not inside a string or comment.
    # We'll do a manual scan from pos to find the 'images:' token.
    i = pos
    while i < len(text):
        # Skip comments and strings
        if text[i:i+2] == '//':
            i = text.find('\n', i) + 1
            continue
        if text[i:i+2] == '/*':
            i = text.find('*/', i) + 2
            continue
        if text[i] in ('"', "'"):
            # skip string
            quote = text[i]
            i += 1
            while i < len(text) and text[i] != quote:
                if text[i] == '\\' and i+1 < len(text):
                    i += 2
                else:
                    i += 1
            i += 1  # skip closing quote
            continue

        # Check for 'images:'
        if text[i:i+7].lower() == 'images:':
            # make sure it's not part of a larger word
            # we'll just accept it.
            # Find the opening '[' after the colon, skipping whitespace
            j = i + 7
            while j < len(text) and text[j] in (' ', '\t', '\n', '\r'):
                j += 1
            if j < len(text) and text[j] == '[':
                bracket_start = j
                break
        i += 1
    else:
        raise ValueError(f"No 'images:' array found for category '{category_id}'")

    # 3. Now find the matching closing ']' skipping brackets inside strings/comments
    bracket_count = 0
    k = bracket_start
    while k < len(text):
        # Skip comments and strings
        if text[k:k+2] == '//':
            k = text.find('\n', k) + 1
            continue
        if text[k:k+2] == '/*':
            k = text.find('*/', k) + 2
            continue
        if text[k] in ('"', "'"):
            quote = text[k]
            k += 1
            while k < len(text) and text[k] != quote:
                if text[k] == '\\' and k+1 < len(text):
                    k += 2
                else:
                    k += 1
            k += 1  # skip closing quote
            continue

        # Now check brackets
        if text[k] == '[':
            bracket_count += 1
        elif text[k] == ']':
            bracket_count -= 1
            if bracket_count == 0:
                end = k
                break
        k += 1
    else:
        raise ValueError(f"Could not find matching ']' for category '{category_id}'")

    inner = text[bracket_start+1:end]
    return bracket_start+1, end, inner

def parse_existing_src(inner_text):
    pattern = r'src\s*:\s*["\']([^"\']+)["\']'
    return re.findall(pattern, inner_text)

def update_data_js():
    print("[SCAN] Scanning folders...")
    with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    for cat_id, folder in CATEGORY_FOLDERS.items():
        print(f"\n[CAT] Category: {cat_id}")
        try:
            start, end, inner = find_images_array(content, cat_id)
        except ValueError as e:
            print(f"   [ERR] {e}")
            continue

        existing_src = parse_existing_src(inner)
        print(f"   [EXIST] {len(existing_src)} entries")
        new_files = get_image_files(folder)
        added = [f for f in new_files if f not in existing_src]

        if not added:
            print(f"   [OK] No new images to add.")
            continue

        print(f"   [ADD] Adding {len(added)} new file(s):")
        for f in added:
            print(f"      - {f}")

        # Build indentation from the last non‑empty line
        lines = inner.split('\n')
        indent = "  "
        for line in reversed(lines):
            stripped = line.strip()
            if stripped and not stripped.startswith('//'):
                indent = line[:len(line) - len(line.lstrip())]
                break

        new_lines = []
        for f in added:
            base = os.path.splitext(os.path.basename(f))[0]
            alt_text = base.replace('_', ' ').title()
            new_lines.append(f'{indent}{{ src: "{f}", alt: "{alt_text}", caption: "" }},')

        if inner and not inner.endswith('\n'):
            inner += '\n'
        new_inner = inner + '\n'.join(new_lines) + '\n'
        content = content[:start] + new_inner + content[end:]
        modified = True

    if modified:
        with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
            f.write(content)
        print("\n[DONE] data.js updated.")
    else:
        print("\n[DONE] No changes needed.")

if __name__ == '__main__':
    update_data_js()