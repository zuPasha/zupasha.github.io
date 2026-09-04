#!/usr/bin/env python3
"""
Generate a PDF of the VantaPsy Chronology with the VantaPsy aesthetic.

Key behaviours (kept in sync with the website's js/lore/ code):

  * Entries are loaded from js/lore/manifest.js, in manifest order, exactly
    like loader.js does in the browser. Files not listed in the manifest are
    ignored (partial publishing works the same way as on the site).
  * The introduction is the "A Quick Primer" text from renderer.js.
  * ~~expunged~~ passages are removed entirely from the PDF (the [EXPUNGED]
    marker is a website-only affordance).
  * {{colour}}text{{/colour}} markup is rendered as real coloured text using
    the same palette as renderer.js.
"""

import sys
import re
import traceback
from pathlib import Path
from datetime import datetime

# ============================================================
#  LOGGING HELPERS
# ============================================================

def log(message):
    print(message)
    sys.stdout.flush()

def log_error(message):
    print(f"ERROR: {message}")
    sys.stdout.flush()

# ============================================================
#  DEPENDENCY CHECK
# ============================================================

log("=" * 60)
log("VantaPsy Chronology PDF Generator")
log("=" * 60)
log("")

try:
    import reportlab
    log(f"Reportlab version: {reportlab.Version}")
except ImportError:
    log("Reportlab not found. Installing...")
    import subprocess
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "reportlab"])
        log("Reportlab installed successfully.")
    except Exception as e:
        log_error(f"Failed to install reportlab: {e}")
        input("Press Enter to exit...")
        sys.exit(1)

try:
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.units import mm
    from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER
    from reportlab.lib import colors
    from reportlab.platypus import (
        BaseDocTemplate, Paragraph, Spacer, PageBreak, Frame, PageTemplate,
    )
    from reportlab.pdfgen import canvas
    log("Reportlab imports successful.")
except ImportError as e:
    log_error(f"Failed to import reportlab components: {e}")
    input("Press Enter to exit...")
    sys.exit(1)

# ============================================================
#  CONFIGURATION
# ============================================================

SCRIPT_DIR = Path(__file__).parent.absolute()
LORE_DATA_DIR = SCRIPT_DIR / "js" / "lore"
MANIFEST_FILE = LORE_DATA_DIR / "manifest.js"
OUTPUT_DIR = SCRIPT_DIR / "lore"
OUTPUT_FILE = OUTPUT_DIR / "VantaPsy_Chronology.pdf"

# Files that are code, never data.
NON_DATA_FILES = {"manifest.js", "loader.js", "renderer.js", "includes.js"}

log(f"Script directory: {SCRIPT_DIR}")
log(f"Looking for lore data in: {LORE_DATA_DIR}")
log("")

# Mirrors renderer.js
AGES = [
    ("age-of-men", "Age of Men"),
    ("age-of-gods", "Age of Gods"),
    ("age-of-fairytales", "Age of Fairytales"),
    ("age-of-magic", "Age of Magic"),
    ("age-of-knowledge", "Age of Knowledge"),
    ("age-of-decay", "Age of Decay"),
]

CATEGORIES = [
    ("events", "Events"),
    ("places", "Places"),
    ("entities", "Entities"),
    ("concepts", "Concepts"),
    ("substances", "Substances"),
    ("bestiary", "Bestiary"),
]

AGE_LABELS = dict(AGES)
CATEGORY_LABELS = dict(CATEGORIES)
CATEGORY_ORDER = [c for c, _ in CATEGORIES]

# Same palette renderer.js allows the data files to request.
LORE_COLORS = {
    "red": "#B64250",
    "white": "#E7F0EF",
    "synthwhite": "#D2F2F5",
    "black": "#525252",
    "green": "#86AF58",
    "gold": "#C5A169",
    "blue": "#276BAA",
    "pink": "#D898A5",
    "purple": "#6C56B7",
}

COLOR_TAG_RE = re.compile(r"\{\{(\w+)\}\}([\s\S]*?)\{\{/\1\}\}")
EXPUNGE_RE = re.compile(r"~~[\s\S]*?~~")

# ============================================================
#  VANTA PSY COLOURS
# ============================================================

class VantaColours:
    bg = colors.HexColor('#0b0a10')
    bg_raised = colors.HexColor('#15131c')
    bg_raised_2 = colors.HexColor('#1c1925')
    line = colors.HexColor('#2a2632')
    ink = colors.HexColor('#cfc9d9')
    ink_dim = colors.HexColor('#8c879a')
    ink_bright = colors.HexColor('#f3f0fa')
    vanta = colors.HexColor('#8a67c2')
    vanta_dim = colors.HexColor('#4f3c70')


# ============================================================
#  TEXT CLEANUP  (expungement + colour markup)
# ============================================================

def strip_expunged(text):
    """Remove ~~expunged~~ passages entirely (PDF has no [EXPUNGED] marker)."""
    if not text:
        return text
    cleaned = EXPUNGE_RE.sub('', text)
    # Tidy the punctuation/whitespace left behind by a removed span.
    cleaned = re.sub(r'[ \t]{2,}', ' ', cleaned)
    cleaned = re.sub(r' +([,.;:!?])', r'\1', cleaned)
    return cleaned


def colorize(text):
    """Turn {{colour}}text{{/colour}} into reportlab <font color=...> markup."""
    if not text:
        return text

    def repl(match):
        key = match.group(1).lower()
        inner = colorize(match.group(2))
        hexcode = LORE_COLORS.get(key)
        if not hexcode:
            return inner
        return f'<font color="{hexcode}">{inner}</font>'

    return COLOR_TAG_RE.sub(repl, text)


def strip_color_markup(text):
    if not text:
        return text
    return COLOR_TAG_RE.sub(lambda m: strip_color_markup(m.group(2)), text)


def escape_xml(text):
    """Escape for reportlab's mini-HTML before we add our own markup."""
    if not text:
        return ""
    return (str(text)
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;'))


def clean_plain(text):
    """Expunge + drop colour markup + escape, for plain contexts (names, TOC)."""
    return escape_xml(strip_color_markup(strip_expunged(text or '')).strip())


# ============================================================
#  JS PARSER
# ============================================================

def read_text(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()


def strip_js_comments(text):
    """Remove // and /* */ comments while respecting string/template literals."""
    out = []
    i = 0
    n = len(text)
    while i < n:
        ch = text[i]
        if ch in ('"', "'", '`'):
            quote = ch
            out.append(ch)
            i += 1
            while i < n:
                if text[i] == '\\':
                    out.append(text[i:i + 2])
                    i += 2
                    continue
                out.append(text[i])
                if text[i] == quote:
                    i += 1
                    break
                i += 1
            continue
        if ch == '/' and i + 1 < n and text[i + 1] == '/':
            while i < n and text[i] != '\n':
                i += 1
            continue
        if ch == '/' and i + 1 < n and text[i + 1] == '*':
            end = text.find('*/', i + 2)
            i = n if end == -1 else end + 2
            continue
        out.append(ch)
        i += 1
    return ''.join(out)


def find_matching(text, start, open_ch, close_ch):
    """Index of the closing bracket matching text[start] == open_ch, or -1."""
    depth = 0
    i = start
    n = len(text)
    while i < n:
        ch = text[i]
        if ch in ('"', "'", '`'):
            quote = ch
            i += 1
            while i < n:
                if text[i] == '\\':
                    i += 2
                    continue
                if text[i] == quote:
                    break
                i += 1
            i += 1
            continue
        if ch == open_ch:
            depth += 1
        elif ch == close_ch:
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1


def parse_manifest(manifest_path):
    """Return the ordered list of data-file paths from window.LORE_MANIFEST."""
    text = strip_js_comments(read_text(manifest_path))
    match = re.search(r'LORE_MANIFEST\s*=\s*\[', text)
    if not match:
        return []
    open_idx = match.end() - 1
    close_idx = find_matching(text, open_idx, '[', ']')
    if close_idx == -1:
        return []
    body = text[open_idx + 1:close_idx]
    return [p.strip() for p in re.findall(r'["\']([^"\']+)["\']', body)]


def unescape_js_string(raw, quote):
    """Decode escapes inside a JS string / template literal body."""
    out = []
    i = 0
    n = len(raw)
    simple = {'n': '\n', 't': '\t', 'r': '\r', 'b': '', 'f': '',
              '\\': '\\', '"': '"', "'": "'", '`': '`', '$': '$', '/': '/'}
    while i < n:
        ch = raw[i]
        if ch == '\\' and i + 1 < n:
            nxt = raw[i + 1]
            if nxt == 'u' and i + 5 < n:
                try:
                    out.append(chr(int(raw[i + 2:i + 6], 16)))
                    i += 6
                    continue
                except ValueError:
                    pass
            if nxt == '\n':  # line continuation
                i += 2
                continue
            out.append(simple.get(nxt, nxt))
            i += 2
            continue
        out.append(ch)
        i += 1
    return ''.join(out)


def read_js_value(text, i):
    """Read one JS value starting at index i. Returns (value, next_index)."""
    n = len(text)
    while i < n and text[i] in ' \t\r\n':
        i += 1
    if i >= n:
        return None, i
    ch = text[i]

    if ch in ('"', "'", '`'):
        quote = ch
        j = i + 1
        buf = []
        while j < n:
            if text[j] == '\\':
                buf.append(text[j:j + 2])
                j += 2
                continue
            if text[j] == quote:
                break
            buf.append(text[j])
            j += 1
        return unescape_js_string(''.join(buf), quote), j + 1

    if ch == '[':
        close = find_matching(text, i, '[', ']')
        if close == -1:
            return [], n
        inner = text[i + 1:close]
        items = []
        k = 0
        while k < len(inner):
            c = inner[k]
            if c in ('"', "'", '`'):
                val, k = read_js_value(inner, k)
                if val is not None:
                    items.append(val)
                continue
            k += 1
        return items, close + 1

    if ch == '{':
        close = find_matching(text, i, '{', '}')
        if close == -1:
            return {}, n
        return parse_entry_object(text[i:close + 1]), close + 1

    # number / boolean / null / identifier
    j = i
    while j < n and text[j] not in ',}\n':
        j += 1
    raw = text[i:j].strip()
    if raw in ('true', 'false'):
        return raw == 'true', j
    if raw in ('null', 'undefined', ''):
        return None, j
    try:
        return float(raw) if '.' in raw else int(raw), j
    except ValueError:
        return raw, j


def parse_entry_object(obj_text):
    """Parse a `{ key: value, ... }` literal into a dict (top level only)."""
    entry = {}
    inner = obj_text.strip()
    if inner.startswith('{'):
        inner = inner[1:]
    if inner.endswith('}'):
        inner = inner[:-1]

    i = 0
    n = len(inner)
    while i < n:
        m = re.compile(r'\s*(?:["\']([A-Za-z0-9_$]+)["\']|([A-Za-z0-9_$]+))\s*:').match(inner, i)
        if not m:
            i += 1
            continue
        key = m.group(1) or m.group(2)
        value, i = read_js_value(inner, m.end())
        entry[key] = value

        # Skip to the next comma at this nesting level.
        while i < n and inner[i] not in ',':
            i += 1
        i += 1
    return entry


def parse_js_entries(text):
    """Collect every object pushed onto (window.)LORE_ENTRIES, in file order."""
    text = strip_js_comments(text)
    entries = []
    for match in re.finditer(r'LORE_ENTRIES\s*\.\s*push\s*\(', text):
        open_idx = match.end() - 1
        close_idx = find_matching(text, open_idx, '(', ')')
        if close_idx == -1:
            continue
        args = text[open_idx + 1:close_idx]
        i = 0
        while i < len(args):
            if args[i] == '{':
                close = find_matching(args, i, '{', '}')
                if close == -1:
                    break
                entry = parse_entry_object(args[i:close + 1])
                if entry.get('name'):
                    entries.append(entry)
                i = close + 1
                continue
            i += 1

    # Also support `LORE_ENTRIES = LORE_ENTRIES.concat([ ... ])`
    for match in re.finditer(r'LORE_ENTRIES\s*\.\s*concat\s*\(', text):
        open_idx = match.end() - 1
        close_idx = find_matching(text, open_idx, '(', ')')
        if close_idx == -1:
            continue
        args = text[open_idx + 1:close_idx]
        i = 0
        while i < len(args):
            if args[i] == '{':
                close = find_matching(args, i, '{', '}')
                if close == -1:
                    break
                entry = parse_entry_object(args[i:close + 1])
                if entry.get('name'):
                    entries.append(entry)
                i = close + 1
                continue
            i += 1
    return entries


def load_js_data_file(filepath, fallback_category):
    log(f"    Reading: {filepath.name}")
    try:
        content = read_text(filepath)
    except Exception as e:
        log_error(f"    Could not read file: {e}")
        return []
    entries = parse_js_entries(content)
    for entry in entries:
        if not entry.get('category') and fallback_category:
            entry['category'] = fallback_category
        entry['_source'] = filepath.name
    if entries:
        log(f"    Loaded {len(entries)} entries from {filepath.name}")
    else:
        log(f"    No entries parsed from {filepath.name}")
    return entries


def manifest_files():
    """Resolve manifest paths to real files, in manifest order."""
    if not MANIFEST_FILE.exists():
        log_error(f"Manifest not found: {MANIFEST_FILE}")
        return []
    paths = parse_manifest(MANIFEST_FILE)
    log(f"Manifest lists {len(paths)} data files.")
    resolved = []
    for rel in paths:
        candidate = (SCRIPT_DIR / rel)
        if not candidate.exists():
            # Manifest paths are site-root relative; also try lore-dir relative.
            alt = LORE_DATA_DIR / Path(rel).name
            parent = Path(rel).parent.name
            alt2 = LORE_DATA_DIR / parent / Path(rel).name
            for c in (alt2, alt):
                if c.exists():
                    candidate = c
                    break
        if candidate.exists() and candidate.name not in NON_DATA_FILES:
            resolved.append(candidate)
        else:
            log(f"  Missing data file (skipped): {rel}")
    return resolved


def load_all_lore_entries():
    if not LORE_DATA_DIR.exists():
        log_error(f"Directory not found: {LORE_DATA_DIR}")
        return []

    files = manifest_files()
    if not files:
        log_error("No data files resolved from the manifest.")
        return []

    log(f"\nLoading {len(files)} data files in manifest order.")
    log("")

    all_entries = []
    for filepath in files:
        fallback_category = filepath.parent.name
        if fallback_category not in CATEGORY_LABELS:
            fallback_category = None
        try:
            all_entries.extend(load_js_data_file(filepath, fallback_category))
        except Exception as e:
            log_error(f"Error loading {filepath.name}: {e}")
            traceback.print_exc()

    # Deduplicate by id, keeping first occurrence (manifest order wins).
    seen = set()
    unique = []
    for entry in all_entries:
        entry_id = entry.get('id')
        if entry_id:
            if entry_id in seen:
                log(f"  Duplicate id skipped: {entry_id} ({entry.get('_source')})")
                continue
            seen.add(entry_id)
        unique.append(entry)

    # The website hides 'overview' entries from the Chronology; so do we.
    unique = [e for e in unique if e.get('category') != 'overview']

    log(f"\nTotal unique entries loaded: {len(unique)}")
    return unique


def get_category_label(category_id):
    if not category_id:
        return 'Uncategorised'
    return CATEGORY_LABELS.get(category_id, str(category_id).capitalize())


def get_age_label(age_id):
    if not age_id:
        return ''
    return AGE_LABELS.get(age_id, str(age_id).replace('-', ' ').title())


# ============================================================
#  DOCUMENT TEMPLATE / CANVAS
# ============================================================

class VantaPsyDocTemplate(BaseDocTemplate):
    def __init__(self, *args, **kwargs):
        BaseDocTemplate.__init__(self, *args, **kwargs)
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id='normal')
        self.addPageTemplates([
            PageTemplate(id='Dark', frames=[frame], onPage=self._draw_background)
        ])

    def _draw_background(self, canv, doc):
        canv.saveState()
        canv.setFillColor(VantaColours.bg)
        canv.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
        canv.restoreState()


class PageNumberCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self.page_count = 0

    def showPage(self):
        self.page_count += 1
        if self.page_count > 1:
            self.draw_page_number()
            self.draw_header_footer()
        canvas.Canvas.showPage(self)

    def draw_page_number(self):
        self.saveState()
        self.setFillColor(VantaColours.ink_dim)
        self.setFont('Helvetica', 8)
        self.drawCentredString(A4[0] / 2, 12 * mm, str(self.page_count))
        self.restoreState()

    def draw_header_footer(self):
        self.saveState()
        self.setStrokeColor(VantaColours.vanta_dim)
        self.setLineWidth(0.5)
        self.line(18 * mm, A4[1] - 18 * mm, A4[0] - 18 * mm, A4[1] - 18 * mm)
        self.setFillColor(VantaColours.vanta)
        self.setFont('Helvetica-Bold', 8)
        self.drawRightString(A4[0] - 18 * mm, A4[1] - 15 * mm, "VantaPsy Chronology")
        tri_size = 4
        tri_x = 18 * mm
        tri_y = A4[1] - 12 * mm
        p = self.beginPath()
        p.moveTo(tri_x, tri_y)
        p.lineTo(tri_x + tri_size, tri_y + tri_size)
        p.lineTo(tri_x + tri_size * 2, tri_y)
        p.close()
        self.drawPath(p, fill=1, stroke=0)
        self.restoreState()


# ============================================================
#  STYLES
# ============================================================

def create_styles():
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(
        name='CustomTitle', parent=styles['Title'], fontName='Helvetica-Bold',
        fontSize=28, textColor=VantaColours.vanta, alignment=TA_CENTER,
        spaceAfter=8, leading=32,
    ))
    styles.add(ParagraphStyle(
        name='CustomSubtitle', parent=styles['Normal'], fontName='Helvetica',
        fontSize=12, textColor=VantaColours.ink_dim, alignment=TA_CENTER, spaceAfter=12,
    ))
    styles.add(ParagraphStyle(
        name='CustomEyebrow', parent=styles['Normal'], fontName='Helvetica-Bold',
        fontSize=8, textColor=VantaColours.vanta, spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name='CustomChapter', parent=styles['Heading1'], fontName='Helvetica-Bold',
        fontSize=18, textColor=VantaColours.ink_bright, spaceAfter=10,
        spaceBefore=16, leading=22,
    ))
    styles.add(ParagraphStyle(
        name='CustomEntryTitle', parent=styles['Heading2'], fontName='Helvetica-Bold',
        fontSize=14, textColor=VantaColours.vanta, spaceAfter=4, spaceBefore=10, leading=18,
    ))
    styles.add(ParagraphStyle(
        name='CustomHeader', parent=styles['Heading3'], fontName='Helvetica-Bold',
        fontSize=12, textColor=VantaColours.ink_bright, spaceAfter=4, spaceBefore=8, leading=16,
    ))
    styles.add(ParagraphStyle(
        name='CustomSubHeader', parent=styles['Heading3'], fontName='Helvetica-Bold',
        fontSize=10.5, textColor=VantaColours.ink_bright, spaceAfter=3, spaceBefore=6, leading=14,
    ))
    styles.add(ParagraphStyle(
        name='CustomBodyText', parent=styles['Normal'], fontName='Helvetica',
        fontSize=9.5, leading=14, alignment=TA_JUSTIFY, textColor=VantaColours.ink, spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name='CustomBullet', parent=styles['Normal'], fontName='Helvetica',
        fontSize=9.5, leading=14, textColor=VantaColours.ink, spaceAfter=3,
        leftIndent=12, bulletIndent=2,
    ))
    styles.add(ParagraphStyle(
        name='CustomBadge', parent=styles['Normal'], fontName='Helvetica-Oblique',
        fontSize=7.5, textColor=VantaColours.ink_dim, spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name='CustomRelated', parent=styles['Normal'], fontName='Helvetica-Oblique',
        fontSize=8.5, leading=12, textColor=VantaColours.ink_dim, spaceBefore=4, spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name='CustomTOC', parent=styles['Normal'], fontName='Helvetica',
        fontSize=9.5, leading=14, textColor=VantaColours.ink, spaceAfter=2, leftIndent=10,
    ))
    styles.add(ParagraphStyle(
        name='CustomTOCChapter', parent=styles['CustomTOC'], fontName='Helvetica-Bold',
        fontSize=11, textColor=VantaColours.ink_bright, spaceAfter=4, spaceBefore=8, leftIndent=0,
    ))
    return styles


# ============================================================
#  PROSE PARSER  (mirrors renderer.js parseLoreText)
# ============================================================

def parse_lore_text(text):
    if not text:
        return []

    lines = text.split('\n')
    sections = []
    buffer = []

    def is_header_line(line):
        if not line:
            return False
        if len(line) >= 60:
            return False
        if line[-1] in '.!?':
            return False
        if re.match(r'^\d+[.)]', line) or re.match(r'^[-*\u2022]', line):
            return False
        return True

    def flush():
        if buffer:
            joined = ' '.join(buffer).strip()
            if joined:
                sections.append(('paragraph', joined))
            buffer.clear()

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        if not line:
            flush()
            i += 1
            continue

        if is_header_line(line):
            flush()
            is_main = (i + 1 < len(lines) and lines[i + 1].strip() == '')
            sections.append(('header' if is_main else 'subheader', line))
            i += 1
            if is_main and i < len(lines) and lines[i].strip() == '':
                i += 1
            continue

        if re.match(r'^[-*\u2022]\s+', line) or re.match(r'^\d+[.)]\s+', line):
            flush()
            sections.append(('bullet', re.sub(r'^([-*\u2022]|\d+[.)])\s+', '', line)))
            i += 1
            continue

        buffer.append(line)
        i += 1

        if i < len(lines):
            nxt = lines[i].strip()
            if nxt == '' or is_header_line(nxt):
                flush()

    flush()
    return sections


# ============================================================
#  LINKIFY  (cross-links between entries)
# ============================================================

def build_link_pattern(entries):
    names = []
    for entry in entries:
        entry_id = entry.get('id')
        if not entry_id:
            continue
        name = entry.get('name')
        if name:
            names.append((name, entry_id))
        for alias in entry.get('aliases') or []:
            if alias:
                names.append((alias, entry_id))
    names.sort(key=lambda pair: len(pair[0]), reverse=True)
    if not names:
        return None, {}
    lookup = {}
    for name, entry_id in names:
        lookup.setdefault(name.lower(), entry_id)
    pattern = re.compile(
        r'(?<![A-Za-z0-9])(' + '|'.join(re.escape(n) for n, _ in names) + r')(?![A-Za-z0-9])'
    )
    return pattern, lookup


def linkify(escaped_text, pattern, lookup, current_id):
    """Add internal links to escaped text. Never touches existing markup."""
    if not escaped_text or pattern is None:
        return escaped_text

    def repl(match):
        word = match.group(1)
        target = lookup.get(word.lower())
        if not target or target == current_id:
            return word
        return (f'<a href="#{target}" color="#cfc9d9" underlineColor="#8a67c2" '
                f'underline="1" underlineOffset="1.5" underlineWidth="0.5">{word}</a>')

    # Protect anything already inside a tag (there is none at this stage, but
    # keep it safe if markup is ever added earlier).
    parts = re.split(r'(<[^>]*>)', escaped_text)
    for idx, part in enumerate(parts):
        if not part.startswith('<'):
            parts[idx] = pattern.sub(repl, part)
    return ''.join(parts)


def render_prose(text, styles, pattern, lookup, current_id):
    """Turn an entry's lore text into a list of flowables."""
    flowables = []
    cleaned = strip_expunged(text or '')
    for section_type, content in parse_lore_text(cleaned):
        body = colorize(linkify(escape_xml(content), pattern, lookup, current_id))
        if section_type == 'header':
            flowables.append(Paragraph(body, styles['CustomHeader']))
        elif section_type == 'subheader':
            flowables.append(Paragraph(body, styles['CustomSubHeader']))
        elif section_type == 'bullet':
            flowables.append(Paragraph(body, styles['CustomBullet'], bulletText='\u2022'))
        else:
            flowables.append(Paragraph(body, styles['CustomBodyText']))
    return flowables


# ============================================================
#  PRIMER  (the "A Quick Primer" intro from renderer.js)
# ============================================================

PRIMER_PARAGRAPHS = [
    "Aerisu remembers itself as time recurs, carrying the Echoes of the past into the future. "
    "The VantaPsy Chronology traces that history across six ages, following the civilizations, "
    "Spirits, souls, magic, and forces that have shaped the world.",

    "The Age of Men ends with the Crystallisation of Elysium. The Age of Gods sees Lunarkos "
    "descend and the Shattering reshape the world. The Age of Fairytales rebuilds civilisation "
    "around magic. The Age of Magic brings the War for the Orb of Souls. The Age of Knowledge "
    "gives way to the present darkness. The Age of Decay now stretches across nine years of "
    "night, with a city folded by time and a goddess sleeping within an orphanage.",

    "Magic is potential made manifest through Resonance. Every living thing, memory, desire, "
    "and action participates in the same cosmic frame, leaving Echoes that can persist through "
    "souls, cultures, places, and even the Stars. Lux connects and sustains these systems. "
    "Vanta arises from lack and desire, and when desire becomes self-perpetuating, it becomes "
    "the Curse.",

    "The Chronology follows these forces through Aerisu: the nature of the soul, the Spiral "
    "Veins beneath the world, the Spirits and their domains, the memories carried through "
    "Recursion, and the many ways existence can bloom, decay, and become something else.",

    "New to the Chronology? Start with the VantaPsy Cosmology for a concise overview of the "
    "fundamental structure of Aerisu and VantaPsy as a whole.",
]

PRIMER_AGE_INTROS = [
    ("Age of Men", "the world before the Moon. Solmara rose as an empire of scholars and soldiers who believed order could be perfected. Hoshimira bent the knee as vassal. Sahran was born from exile, the outcast kin of Hoshimira driven into scorching deserts. The Curse was a distant whisper. The Scorching Sun ruled an unchanging sky. The Vanta Explosion crystallised Elysium, and the world prepared to break."),
    ("Age of Gods", "the sky shattered. Lunarkos fell. Bahamut rose from the planet's core. The collision tore the boundary between soul and matter. Gods ascended from the wreckage. The Moon was born, scarred and veined. The world was remade in fire, light, and divine will."),
    ("Age of Fairytales", "from ash, myth took root. The Nine Spirits wove the Barrier between realms. The Phumenar sought the Orb. The First Separation cracked the Rift. Gods and mortals learned to coexist. History became legend, and legend became truth."),
    ("Age of Magic", "magic became the skeleton of civilisation. Dragons soared. The Ashtar marched. Death gardens bloomed. Sorcery intertwined with steel. The world rebuilt itself on arcane foundations. Wonder was woven into the everyday."),
    ("Age of Knowledge", "the age of codification and pathology. The Diviners systematised the soul. Orthogenesis engineered new life: the Borenfegens. Magic receded. Technology advanced. The world tried to understand itself, and lost something in the process."),
    ("Age of Decay", "the present. Perpetual night over Sengetsuki. The Curse in every bloodline. The sun a pale memory on Sundays. Technology and magic wear thin. The accumulated weight of every age presses down, and the world holds its breath for the end, or simply another loop."),
]

PRIMER_CLOSING = ("This document is a work in progress. Entries are added as the Chronology "
                  "and the game come together.")


def build_primer(styles, pattern, lookup):
    flow = [Paragraph('<a name="intro"/>The VantaPsy Chronology', styles['CustomEyebrow']),
            Paragraph("A Quick Primer", styles['CustomChapter'])]

    for para in PRIMER_PARAGRAPHS:
        flow.append(Paragraph(
            linkify(escape_xml(para), pattern, lookup, None),
            styles['CustomBodyText'],
        ))

    flow.append(Spacer(1, 4 * mm))
    flow.append(Paragraph("The Six Ages", styles['CustomHeader']))
    for label, text in PRIMER_AGE_INTROS:
        flow.append(Paragraph(
            f'<b><font color="#8a67c2">{escape_xml(label)}</font></b> — '
            + linkify(escape_xml(text), pattern, lookup, None),
            styles['CustomBodyText'],
        ))

    flow.append(Spacer(1, 4 * mm))
    flow.append(Paragraph(f'<i>{escape_xml(PRIMER_CLOSING)}</i>', styles['CustomBadge']))
    return flow


# ============================================================
#  GENERATE PDF
# ============================================================

def generate_pdf(entries, output_path):
    log("\nPreparing PDF document...")
    log(f"Entries to include: {len(entries)}")

    entries_by_id = {e['id']: e for e in entries if e.get('id')}
    pattern, lookup = build_link_pattern(entries)

    # Group by category, keeping manifest order inside each category and the
    # site's tab order between categories.
    grouped = {}
    for entry in entries:
        grouped.setdefault(entry.get('category') or 'uncategorised', []).append(entry)

    ordered_categories = [c for c in CATEGORY_ORDER if grouped.get(c)]
    ordered_categories += [c for c in grouped if c not in CATEGORY_ORDER]

    doc = VantaPsyDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=25 * mm,
        bottomMargin=18 * mm,
        title="VantaPsy Chronology",
        author="zuPasha / TsuPasai",
    )

    styles = create_styles()
    story = []

    # ---------------- cover ----------------
    # Note: the built-in Helvetica fonts have no glyphs for shapes such as
    # U+25B2 or U+2726, so the cover uses only Latin-1 characters. The purple
    # triangle on inner pages is drawn on the canvas instead.
    story.append(Spacer(1, 35 * mm))
    story.append(Paragraph("The VantaPsy Chronology", styles['CustomTitle']))
    story.append(Spacer(1, 3 * mm))
    story.append(Paragraph("A Compendium of Aerisu", styles['CustomSubtitle']))
    story.append(Spacer(1, 8 * mm))
    story.append(Paragraph('<font color="#4f3c70">&#8212;&#8212;  &#183;  &#8212;&#8212;</font>', ParagraphStyle(
        name='Divider', parent=styles['CustomSubtitle'], fontSize=12,
        alignment=TA_CENTER, textColor=VantaColours.vanta_dim, spaceAfter=12)))
    story.append(Paragraph("Compiled from the lore of", styles['CustomSubtitle']))
    story.append(Paragraph("VantaPsy: Soul Snatcher", styles['CustomSubtitle']))
    story.append(Spacer(1, 6 * mm))
    story.append(Paragraph(
        f"Generated: {datetime.now().strftime('%d %B %Y')}  ·  {len(entries)} entries",
        styles['CustomSubtitle']))
    story.append(Spacer(1, 18 * mm))
    story.append(Paragraph('<font color="#8a67c2"><i>"To lack; To want a soul."</i></font>',
                           ParagraphStyle(name='Quote', parent=styles['CustomSubtitle'],
                                          fontSize=13, alignment=TA_CENTER,
                                          textColor=VantaColours.vanta, spaceAfter=4)))
    story.append(Paragraph('<font color="#4f3c70">&#8212;</font>', ParagraphStyle(
        name='QuoteLine', parent=styles['CustomSubtitle'], fontSize=8,
        alignment=TA_CENTER, textColor=VantaColours.vanta_dim, spaceAfter=2)))
    story.append(Paragraph("VantaPsy", ParagraphStyle(
        name='QuoteAttribution', parent=styles['CustomSubtitle'], fontSize=9,
        alignment=TA_CENTER, textColor=VantaColours.ink_dim, spaceAfter=4)))
    story.append(PageBreak())

    # ---------------- introduction (the Primer) ----------------
    story.extend(build_primer(styles, pattern, lookup))
    story.append(PageBreak())

    # ---------------- table of contents ----------------
    story.append(Paragraph("Table of Contents", styles['CustomChapter']))
    story.append(Spacer(1, 4 * mm))
    story.append(Paragraph(
        '<a href="#intro" underlineColor="#8a67c2" underline="1" underlineWidth="0.5">'
        'A Quick Primer</a>', styles['CustomTOCChapter']))

    for category in ordered_categories:
        story.append(Paragraph(get_category_label(category), styles['CustomTOCChapter']))
        for entry in grouped[category]:
            name = clean_plain(entry.get('name') or 'Unnamed')
            entry_id = entry.get('id')
            age = get_age_label(entry.get('age'))
            suffix = f'  <font color="#8c879a" size="8">{escape_xml(age)}</font>' if age else ''
            if entry_id:
                story.append(Paragraph(
                    f'<a href="#{entry_id}" underlineColor="#8a67c2" underline="1" '
                    f'underlineWidth="0.5">{name}</a>{suffix}', styles['CustomTOC']))
            else:
                story.append(Paragraph(f'{name}{suffix}', styles['CustomTOC']))

    story.append(PageBreak())

    # ---------------- entries ----------------
    for category in ordered_categories:
        story.append(Paragraph(get_category_label(category), styles['CustomChapter']))
        story.append(Spacer(1, 3 * mm))

        for entry in grouped[category]:
            entry_id = entry.get('id', '')
            name = clean_plain(entry.get('name') or 'Unnamed Entry')
            anchor = f'<a name="{entry_id}"/>' if entry_id else ''
            story.append(Paragraph(anchor + name, styles['CustomEntryTitle']))

            badges = []
            age_label = get_age_label(entry.get('age'))
            if age_label:
                badges.append(age_label)
            badges.append(get_category_label(entry.get('category') or category))
            aliases = [clean_plain(a) for a in (entry.get('aliases') or []) if a]
            badge_line = escape_xml('  ·  '.join(badges))
            if aliases:
                badge_line += '  ·  also known as ' + ', '.join(aliases)
            story.append(Paragraph(badge_line, styles['CustomBadge']))
            story.append(Spacer(1, 2 * mm))

            # Prefer the full description; fall back to the short one.
            body = entry.get('full') or entry.get('short') or 'No description available.'
            prose = render_prose(body, styles, pattern, lookup, entry_id)
            if not prose:
                prose = [Paragraph('No description available.', styles['CustomBodyText'])]
            story.extend(prose)

            related = entry.get('related') or []
            if related:
                links = []
                for rel_id in related:
                    rel = entries_by_id.get(rel_id)
                    if rel:
                        links.append(
                            f'<a href="#{rel_id}" underlineColor="#8a67c2" underline="1" '
                            f'underlineWidth="0.5">{clean_plain(rel.get("name") or rel_id)}</a>')
                if links:
                    story.append(Paragraph("Related: " + ', '.join(links), styles['CustomRelated']))

            story.append(Spacer(1, 2 * mm))
            story.append(Paragraph('<font color="#4f3c70">&#8212;</font>', styles['CustomBadge']))
            story.append(Spacer(1, 4 * mm))

        story.append(PageBreak())

    log("Building PDF...")
    doc.build(story, canvasmaker=PageNumberCanvas)
    log("PDF build complete.")


# ============================================================
#  MAIN
# ============================================================

def main():
    try:
        entries = load_all_lore_entries()

        if not entries:
            log_error("No entries loaded.")
            return False

        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        log(f"Output directory: {OUTPUT_DIR}")

        generate_pdf(entries, OUTPUT_FILE)

        if OUTPUT_FILE.exists():
            size = OUTPUT_FILE.stat().st_size
            log(f"\nPDF saved to: {OUTPUT_FILE}")
            log(f"   Size: {size:,} bytes")
            log(f"   Entries: {len(entries)}")
            return True

        log_error("PDF file was not created.")
        return False

    except Exception as e:
        log_error(f"Unhandled exception: {e}")
        traceback.print_exc()
        return False


if __name__ == "__main__":
    try:
        success = main()
    except Exception as e:
        log_error(f"Fatal error: {e}")
        traceback.print_exc()
        success = False

    log("\n" + "=" * 60)
    log("Script completed successfully." if success else "Script failed. See errors above.")
    log("=" * 60)

    try:
        input("\nPress Enter to exit...")
    except Exception:
        pass
