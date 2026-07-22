#!/usr/bin/env python3
"""
Generate a PDF of the VantaPsy Chronology with the VantaPsy aesthetic.
"""

import os
import sys
import json
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
    from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER, TA_LEFT
    from reportlab.lib import colors
    from reportlab.platypus import BaseDocTemplate, Paragraph, Spacer, PageBreak, Frame, PageTemplate, KeepTogether
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
OUTPUT_DIR = SCRIPT_DIR / "lore"
OUTPUT_FILE = OUTPUT_DIR / "VantaPsy_Chronology.pdf"

log(f"Script directory: {SCRIPT_DIR}")
log(f"Looking for lore data in: {LORE_DATA_DIR}")
log("")

LORE_SUBFOLDERS = ["events", "entities", "concepts", "places", "substances"]

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
#  PARSER
# ============================================================

def parse_js_entries(text):
    entries = []
    pattern = r'LORE_ENTRIES\.push\(\s*([\s\S]*?)\s*\)'
    matches = re.findall(pattern, text)
    if not matches:
        pattern = r'window\.LORE_ENTRIES\.push\(\s*([\s\S]*?)\s*\)'
        matches = re.findall(pattern, text)
    for match in matches:
        objects = extract_top_level_objects(match)
        for obj_text in objects:
            entry = parse_entry_object(obj_text)
            if entry:
                entries.append(entry)
    return entries


def extract_top_level_objects(text):
    objects = []
    brace_count = 0
    start = -1
    for i, ch in enumerate(text):
        if ch == '{':
            if brace_count == 0:
                start = i
            brace_count += 1
        elif ch == '}':
            brace_count -= 1
            if brace_count == 0 and start >= 0:
                objects.append(text[start:i+1])
                start = -1
    return objects


def parse_entry_object(obj_text):
    entry = {}
    id_match = re.search(r'id:\s*"([^"]+)"', obj_text)
    if id_match:
        entry['id'] = id_match.group(1)
    name_match = re.search(r'name:\s*"([^"]+)"', obj_text)
    if name_match:
        entry['name'] = name_match.group(1)
    else:
        name_match = re.search(r'name:\s*`([\s\S]*?)`', obj_text)
        if name_match:
            entry['name'] = name_match.group(1).strip()
    aliases_match = re.search(r'aliases:\s*\[([^\]]+)\]', obj_text)
    if aliases_match:
        aliases_text = aliases_match.group(1)
        aliases = re.findall(r'"([^"]+)"', aliases_text)
        if aliases:
            entry['aliases'] = aliases
    cat_match = re.search(r'category:\s*"([^"]+)"', obj_text)
    if cat_match:
        entry['category'] = cat_match.group(1)
    age_match = re.search(r'age:\s*"([^"]+)"', obj_text)
    if age_match:
        entry['age'] = age_match.group(1)
    short_match = re.search(r'short:\s*"([^"]+)"', obj_text)
    if not short_match:
        short_match = re.search(r'short:\s*`([\s\S]*?)`', obj_text)
    if short_match:
        entry['short'] = short_match.group(1).strip()
    full_match = re.search(r'full:\s*`([\s\S]*?)`', obj_text)
    if full_match:
        entry['full'] = full_match.group(1).strip()
    related_match = re.search(r'related:\s*\[([^\]]+)\]', obj_text)
    if related_match:
        related_text = related_match.group(1)
        related = re.findall(r'"([^"]+)"', related_text)
        if related:
            entry['related'] = related
    if entry.get('name'):
        return entry
    return None


def load_js_data_file(filepath):
    log(f"    Reading: {filepath.name}")
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        log_error(f"    Could not read file: {e}")
        return []
    entries = parse_js_entries(content)
    if entries:
        log(f"    Loaded {len(entries)} entries from {filepath.name}")
    else:
        log(f"    No entries parsed from {filepath.name}")
    return entries


def load_all_lore_entries():
    all_entries = []
    if not LORE_DATA_DIR.exists():
        log_error(f"Directory not found: {LORE_DATA_DIR}")
        return []
    js_files = []
    for subfolder in LORE_SUBFOLDERS:
        folder_path = LORE_DATA_DIR / subfolder
        if folder_path.exists():
            for js_file in folder_path.glob("*.js"):
                if js_file.name not in ["manifest.js", "loader.js", "renderer.js"]:
                    js_files.append(js_file)
        else:
            log(f"  Subfolder not found: {folder_path}")
    for js_file in LORE_DATA_DIR.glob("*.js"):
        if js_file.name not in ["manifest.js", "loader.js", "renderer.js", "includes.js"]:
            js_files.append(js_file)
    if not js_files:
        log_error("No data files found.")
        return []
    log(f"\nFound {len(js_files)} data files.")
    log("")
    for filepath in js_files:
        try:
            entries = load_js_data_file(filepath)
            all_entries.extend(entries)
        except Exception as e:
            log_error(f"Error loading {filepath.name}: {e}")
            traceback.print_exc()
    
    # Remove duplicates by id, keeping first occurrence (manifest order)
    seen = set()
    unique_entries = []
    for entry in all_entries:
        entry_id = entry.get('id')
        if entry_id and entry_id not in seen:
            seen.add(entry_id)
            unique_entries.append(entry)
        elif not entry_id:
            unique_entries.append(entry)
    
    log(f"\nTotal unique entries loaded: {len(unique_entries)}")
    return unique_entries


def get_category_label(category_id):
    labels = {
        'events': 'Events', 'places': 'Places', 'entities': 'Entities',
        'concepts': 'Concepts', 'substances': 'Substances', 'bestiary': 'Bestiary'
    }
    return labels.get(category_id, category_id.capitalize())


def get_age_label(age_id):
    labels = {
        'age-of-men': 'Age of Men', 'age-of-gods': 'Age of Gods',
        'age-of-fairytales': 'Age of Fairytales', 'age-of-magic': 'Age of Magic',
        'age-of-knowledge': 'Age of Knowledge', 'age-of-decay': 'Age of Decay'
    }
    return labels.get(age_id, age_id.replace('-', ' ').title())


# ============================================================
#  CUSTOM DOCUMENT TEMPLATE - ensures background on every page
# ============================================================

class VantaPsyDocTemplate(BaseDocTemplate):
    def __init__(self, *args, **kwargs):
        BaseDocTemplate.__init__(self, *args, **kwargs)
        # Add a page template that draws background before content
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id='normal')
        self.addPageTemplates([
            PageTemplate(id='Dark', frames=[frame], onPage=self._draw_background)
        ])

    def _draw_background(self, canvas, doc):
        """Draw dark background on each page."""
        canvas.saveState()
        canvas.setFillColor(VantaColours.bg)
        canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
        canvas.restoreState()


# ============================================================
#  CUSTOM CANVAS - for page numbers and header
# ============================================================

class PageNumberCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self.page_count = 0

    def showPage(self):
        self.page_count += 1
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
        # Line
        self.setStrokeColor(VantaColours.vanta_dim)
        self.setLineWidth(0.5)
        self.line(18 * mm, A4[1] - 18 * mm, A4[0] - 18 * mm, A4[1] - 18 * mm)
        # Title
        self.setFillColor(VantaColours.vanta)
        self.setFont('Helvetica-Bold', 8)
        self.drawRightString(A4[0] - 18 * mm, A4[1] - 15 * mm, "VantaPsy Chronology")
        # Triangle
        self.setFillColor(VantaColours.vanta)
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
        name='CustomTitle',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=28,
        textColor=VantaColours.vanta,
        alignment=TA_CENTER,
        spaceAfter=8,
        leading=32
    ))
    
    styles.add(ParagraphStyle(
        name='CustomSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        textColor=VantaColours.ink_dim,
        alignment=TA_CENTER,
        spaceAfter=12
    ))
    
    styles.add(ParagraphStyle(
        name='CustomChapter',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        textColor=VantaColours.ink_bright,
        spaceAfter=10,
        spaceBefore=16,
        leading=22
    ))
    
    styles.add(ParagraphStyle(
        name='CustomEntryTitle',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=14,
        textColor=VantaColours.vanta,
        spaceAfter=4,
        spaceBefore=10,
        leading=18
    ))
    
    styles.add(ParagraphStyle(
        name='CustomSubHeader',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=11,
        textColor=VantaColours.ink_bright,
        spaceAfter=4,
        spaceBefore=6,
        leading=14
    ))
    
    styles.add(ParagraphStyle(
        name='CustomBodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        alignment=TA_JUSTIFY,
        textColor=VantaColours.ink,
        spaceAfter=4
    ))
    
    styles.add(ParagraphStyle(
        name='CustomBadge',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=7.5,
        textColor=VantaColours.ink_dim,
        spaceAfter=2
    ))
    
    styles.add(ParagraphStyle(
        name='CustomTOC',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=VantaColours.ink,
        spaceAfter=2,
        leftIndent=10
    ))
    
    styles.add(ParagraphStyle(
        name='CustomTOCChapter',
        parent=styles['CustomTOC'],
        fontName='Helvetica-Bold',
        fontSize=11,
        textColor=VantaColours.ink_bright,
        spaceAfter=4,
        leftIndent=0
    ))
    
    return styles


def sanitize_text(text):
    """Sanitize text for PDF, but preserve HTML tags."""
    if not text:
        return ""
    # We need to escape & but not < and > because they may be part of tags
    # However, we are already building tags in linkify, so we should not escape them here.
    # For safety, we'll escape only & and leave < and > as they are.
    text = text.replace('&', '&amp;')
    # Do not escape < and > to preserve tags
    return text


def parse_lore_text(text):
    if not text:
        return []
    
    lines = text.split('\n')
    sections = []
    current_paragraph = []
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        if not line:
            if current_paragraph:
                sections.append(('paragraph', ' '.join(current_paragraph)))
                current_paragraph = []
            i += 1
            continue
        
        is_short = len(line) < 60
        ends_with_punct = line[-1] in '.!?'
        is_numbered = re.match(r'^\d+[.)]', line) or line.startswith('-')
        
        if is_short and not ends_with_punct and not is_numbered:
            if current_paragraph:
                sections.append(('paragraph', ' '.join(current_paragraph)))
                current_paragraph = []
            sections.append(('header', line))
            i += 1
            continue
        
        current_paragraph.append(line)
        i += 1
    
    if current_paragraph:
        sections.append(('paragraph', ' '.join(current_paragraph)))
    
    return sections


# ============================================================
#  LINKIFY TEXT - with dotted underline, no color change
# ============================================================

def linkify_text(text, entries_by_id):
    """
    Replace known entry names with hyperlinks.
    Uses purple underline (solid if dotted not supported), keeps text color unchanged.
    """
    if not text:
        return text
    
    # Get all entry names and aliases with their IDs
    name_map = {}
    for entry_id, entry in entries_by_id.items():
        name = entry.get('name', '')
        if name:
            name_map[name] = entry_id
        for alias in entry.get('aliases', []):
            if alias:
                name_map[alias] = entry_id
    
    if not name_map:
        return text
    
    # Sort by length descending
    sorted_names = sorted(name_map.keys(), key=len, reverse=True)
    
    result = []
    i = 0
    while i < len(text):
        # Skip existing HTML tags
        if text[i] == '<':
            end = text.find('>', i)
            if end == -1:
                result.append(text[i:])
                break
            result.append(text[i:end+1])
            i = end + 1
            continue
        
        matched = False
        for name in sorted_names:
            if text[i:i+len(name)].lower() == name.lower():
                prev_char = text[i-1] if i > 0 else ''
                next_char = text[i+len(name)] if i + len(name) < len(text) else ''
                prev_is_word = prev_char.isalnum() or prev_char == '_'
                next_is_word = next_char.isalnum() or next_char == '_'
                if not prev_is_word and not next_is_word:
                    entry_id = name_map[name]
                    # Try dotted first, fall back to solid if viewer doesn't support it
                    # Using underline=1 (solid) with underlineColor
                    result.append(f'<a href="#{entry_id}" underlineColor="#8a67c2" underline=1 underlineWidth="0.5">{text[i:i+len(name)]}</a>')
                    i += len(name)
                    matched = True
                    break
        
        if not matched:
            result.append(text[i])
            i += 1
    
    return ''.join(result)


# ============================================================
#  GENERATE PDF
# ============================================================

def generate_pdf(entries, output_path):
    log("\nPreparing PDF document...")
    log(f"Entries to include: {len(entries)}")
    
    # Build lookup dict for linkify
    entries_by_id = {e.get('id'): e for e in entries if e.get('id')}
    
    # Group entries by category, preserving order
    entries_by_category = {}
    for entry in entries:
        category = entry.get('category', 'uncategorized')
        if category not in entries_by_category:
            entries_by_category[category] = []
        entries_by_category[category].append(entry)
    
    # Create document with custom template
    doc = VantaPsyDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=25 * mm,
        bottomMargin=18 * mm,
        title="VantaPsy Chronology",
        author="zuPasha / TsuPasai"
    )
    
    styles = create_styles()
    story = []
    
    # ============================================================
    #  COVER PAGE
    # ============================================================
    
    story.append(Spacer(1, 35 * mm))
    
    story.append(Paragraph(
        '<font color="#8a67c2">▲</font>',
        ParagraphStyle(
            name='Triangle',
            parent=styles['CustomSubtitle'],
            fontSize=8,
            alignment=TA_CENTER,
            textColor=VantaColours.vanta,
            spaceAfter=8
        )
    ))
    
    story.append(Paragraph(
        "The VantaPsy Chronology",
        styles['CustomTitle']
    ))
    story.append(Spacer(1, 3 * mm))
    
    story.append(Paragraph(
        "A Compendium of Aerisu",
        styles['CustomSubtitle']
    ))
    story.append(Spacer(1, 8 * mm))
    
    story.append(Paragraph(
        '<font color="#4f3c70">—  ✦  —</font>',
        ParagraphStyle(
            name='Divider',
            parent=styles['CustomSubtitle'],
            fontSize=12,
            alignment=TA_CENTER,
            textColor=VantaColours.vanta_dim,
            spaceAfter=12
        )
    ))
    
    story.append(Paragraph(
        f"Compiled from the lore of",
        styles['CustomSubtitle']
    ))
    story.append(Paragraph(
        "VantaPsy: Soul Snatcher",
        styles['CustomSubtitle']
    ))
    story.append(Spacer(1, 6 * mm))
    
    story.append(Paragraph(
        f"Generated: {datetime.now().strftime('%d %B %Y')}",
        styles['CustomSubtitle']
    ))
    story.append(Spacer(1, 18 * mm))
    
    story.append(Paragraph(
        '<font color="#8a67c2"><i>"To lack; To want a soul."</i></font>',
        ParagraphStyle(
            name='Quote',
            parent=styles['CustomSubtitle'],
            fontSize=13,
            alignment=TA_CENTER,
            textColor=VantaColours.vanta,
            spaceAfter=4
        )
    ))
    
    story.append(Paragraph(
        '<font color="#4f3c70">—</font>',
        ParagraphStyle(
            name='QuoteLine',
            parent=styles['CustomSubtitle'],
            fontSize=8,
            alignment=TA_CENTER,
            textColor=VantaColours.vanta_dim,
            spaceAfter=2
        )
    ))
    story.append(Paragraph(
        "VantaPsy",
        ParagraphStyle(
            name='QuoteAttribution',
            parent=styles['CustomSubtitle'],
            fontSize=9,
            alignment=TA_CENTER,
            textColor=VantaColours.ink_dim,
            spaceAfter=4
        )
    ))
    
    story.append(PageBreak())
    
    # ============================================================
    #  TABLE OF CONTENTS
    # ============================================================
    
    story.append(Paragraph("Table of Contents", styles['CustomChapter']))
    story.append(Spacer(1, 6 * mm))
    
    # Introduction link - no color, only underline
    # TOC Introduction
    story.append(Paragraph(
        '<a href="#intro" underlineColor="#8a67c2" underline=1 underlineWidth="0.5">Introduction</a>',
        styles['CustomTOCChapter']
    ))
    
    # Category and entry links
    for category, entries_list in entries_by_category.items():
        if entries_list:
            story.append(Paragraph(
                get_category_label(category),
                styles['CustomTOCChapter']
            ))
            for entry in entries_list:
                entry_id = entry.get('id', '')
                entry_name = entry.get('name', 'Unnamed')
                if entry_id:
                    story.append(Paragraph(
                        f'  <a href="#{entry_id}" underlineColor="#8a67c2" underline=1 underlineWidth="0.5">{entry_name}</a>',
                        styles['CustomTOC']
                    ))
                else:
                    story.append(Paragraph(
                        f'  {entry_name}',
                        styles['CustomTOC']
                    ))
    
    story.append(PageBreak())
    
    # ============================================================
    #  INTRODUCTION
    # ============================================================
    
    story.append(Paragraph('<a name="intro"/>Introduction', styles['CustomChapter']))
    
    intro_text = (
        "Aerisu breathes in loops. Time folds back on itself. "
        "The VantaPsy Chronology maps every turn of that breath. "
        "Vanta is the name for lack and longing, the hollow that knows itself hollow. "
        "The Curse is what happens when Vanta festers. "
        "You do not need this document to play the game. "
        "But for anyone who wants the full weight of Aerisu beneath their feet, the Chronology waits."
    )
    
    intro_paragraphs = intro_text.split('. ')
    for para in intro_paragraphs:
        if para.strip():
            story.append(Paragraph(para + '.', styles['CustomBodyText']))
    
    story.append(PageBreak())
    
    # ============================================================
    #  LORE ENTRIES
    # ============================================================
    
    for category, entries_list in entries_by_category.items():
        if not entries_list:
            continue
        
        story.append(Paragraph(get_category_label(category), styles['CustomChapter']))
        story.append(Spacer(1, 3 * mm))
        
        for entry in entries_list:
            entry_id = entry.get('id', '')
            name = entry.get('name', 'Unnamed Entry')
            
            # Entry title with anchor
            if entry_id:
                story.append(Paragraph(
                    f'<a name="{entry_id}"/>{name}',
                    styles['CustomEntryTitle']
                ))
            else:
                story.append(Paragraph(name, styles['CustomEntryTitle']))
            
            age = entry.get('age', '')
            if age:
                story.append(Paragraph(
                    f"{get_age_label(age)}  ·  {get_category_label(entry.get('category', ''))}",
                    styles['CustomBadge']
                ))
            story.append(Spacer(1, 2 * mm))
            
            # Full text with linkification
            full_text = entry.get('full', '') or entry.get('short', 'No description available.')
            sections = parse_lore_text(full_text)
            
            for section_type, content in sections:
                # Linkify the content
                linked_content = linkify_text(content, entries_by_id)
                if section_type == 'header':
                    story.append(Paragraph(
                        linked_content,
                        styles['CustomSubHeader']
                    ))
                else:
                    story.append(Paragraph(
                        linked_content,
                        styles['CustomBodyText']
                    ))
            
            # Related entries - with hyperlinks (purple dotted underline)
            related = entry.get('related', [])
            if related:
                related_links = []
                for rel_id in related:
                    if rel_id in entries_by_id:
                        rel_name = entries_by_id[rel_id].get('name', rel_id)
                        related_links.append(f'<a href="#{rel_id}" underlineColor="#8a67c2" underline=1 underlineWidth="0.5">{rel_name}</a>')
                    else:
                        related_links.append(rel_id)
                if related_links:
                    story.append(Paragraph(
                        f"Related: {', '.join(related_links)}",
                        styles['CustomBodyText']
                    ))
            
            story.append(Spacer(1, 2 * mm))
            story.append(Paragraph(
                f'<font color="#4f3c70">—</font>',
                styles['CustomBodyText']
            ))
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
            log(f"\n✅ PDF saved to: {OUTPUT_FILE}")
            log(f"   Size: {size:,} bytes")
            log(f"   Entries: {len(entries)}")
            return True
        else:
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
    if success:
        log("✅ Script completed successfully.")
    else:
        log("❌ Script failed. See errors above.")
    log("=" * 60)
    
    try:
        input("\nPress Enter to exit...")
    except:
        pass