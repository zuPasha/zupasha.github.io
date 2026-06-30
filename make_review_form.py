"""
Generates the Review Request PDF: a short, fillable form sent to clients
after a commission is delivered, asking if they'd like to leave a review.

Run: python3 make_review_form.py
Output: Review_Request.pdf
"""

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.lib.colors import HexColor

PAGE_W, PAGE_H = A4
MARGIN = 56
CONTENT_W = PAGE_W - (MARGIN * 2)

INK = HexColor("#1c1a22")        # near-black body text
INK_DIM = HexColor("#5b5763")    # muted grey for helper text
VANTA = HexColor("#7a56b8")      # accent, matches the site's Vanta Purple
LINE = HexColor("#ddd8e6")       # light divider / field border

FONT = "Helvetica"
FONT_BOLD = "Helvetica-Bold"
FONT_OBLIQUE = "Helvetica-Oblique"


def wrap_text(text, font, size, max_width):
    """Word-wraps text to fit max_width, measuring with the real font metrics."""
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = (current + " " + word).strip()
        if stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c, text, x, y, font, size, max_width, leading, color=INK):
    c.setFont(font, size)
    c.setFillColor(color)
    lines = wrap_text(text, font, size, max_width)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def section_label(c, y, number, title, note=None):
    """Draws a small numbered section label, returns the y position below it."""
    c.setFillColor(VANTA)
    c.setFont(FONT_BOLD, 9)
    c.drawString(MARGIN, y, number)

    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 11)
    c.drawString(MARGIN + 22, y, title)
    y -= 14

    if note:
        y = draw_wrapped(c, note, MARGIN + 22, y, FONT_OBLIQUE, 8.5,
                          CONTENT_W - 22, 11, color=INK_DIM)
    return y


def text_field(c, name, x, y, width, height, multiline=False, font_size=10):
    """Draws a fillable field box with a real AcroForm text field inside it."""
    c.setStrokeColor(LINE)
    c.setLineWidth(0.75)
    c.roundRect(x, y - height, width, height, 3, stroke=1, fill=0)

    flags = "multiline" if multiline else ""
    c.acroForm.textfield(
        name=name,
        tooltip=name,
        x=x + 2, y=y - height + 2,
        width=width - 4, height=height - 4,
        borderStyle="none",
        borderWidth=0,
        fillColor=None,
        textColor=INK,
        fontSize=font_size,
        fieldFlags=flags,
        forceBorder=False,
    )


def build():
    c = canvas.Canvas("Review_Request.pdf", pagesize=A4)
    c.setTitle("Review Request - TsuPasai")

    y = PAGE_H - 64

    # ---- header ----
    c.setFillColor(VANTA)
    c.setFont(FONT_BOLD, 9)
    c.drawString(MARGIN, y, "TSUPASAI")
    y -= 22

    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 22)
    c.drawString(MARGIN, y, "Review Request")
    y -= 10

    c.setStrokeColor(VANTA)
    c.setLineWidth(1.4)
    c.line(MARGIN, y, PAGE_W - MARGIN, y)
    y -= 22

    # ---- intro ----
    intro = ("Now that the piece is finished, I'd love it if you felt like leaving a "
             "review, but there's genuinely no pressure either way. If you'd rather "
             "skip this, you don't need to say anything at all, no response just "
             "means no review, and that's completely fine.")
    y = draw_wrapped(c, intro, MARGIN, y, FONT, 10.5, CONTENT_W, 15)
    y -= 6
    intro2 = ("Prefer not to fill in a PDF? Just send the same information back "
              "however we've been talking, email or WhatsApp works just as well.")
    y = draw_wrapped(c, intro2, MARGIN, y, FONT_OBLIQUE, 9.5, CONTENT_W, 13, color=INK_DIM)
    y -= 26

    # ---- section 1: name ----
    y = section_label(c, y, "01", "Name, pseudonym, or anonymous",
                       "Whatever you'd like shown alongside the review. Write \u201cAnonymous\u201d if you'd rather not use a name at all.")
    y -= 8
    text_field(c, "name_field", MARGIN, y, CONTENT_W, 26)
    y -= 38

    # ---- section 2: blurb ----
    y = section_label(c, y, "02", "In a word or a sentence",
                       "However you'd sum up how the piece, or the process, felt to you.")
    y -= 8
    text_field(c, "blurb_field", MARGIN, y, CONTENT_W, 26)
    y -= 38

    # ---- section 3: the review ----
    y = section_label(c, y, "03", "The review itself",
                       "As long or as short as you like.")
    y -= 8
    text_field(c, "review_field", MARGIN, y, CONTENT_W, 110, multiline=True)
    y -= 122

    # ---- section 4: which piece ----
    y = section_label(c, y, "04", "Which piece should this go with?",
                       "Only matters if I made more than one thing for you. Leave it blank and I'll either use the one piece we made, or pick myself if there were a few.")
    y -= 8
    text_field(c, "piece_field", MARGIN, y, CONTENT_W, 26)
    y -= 30

    # ---- footer ----
    c.setStrokeColor(LINE)
    c.setLineWidth(0.75)
    c.line(MARGIN, 70, PAGE_W - MARGIN, 70)

    c.setFillColor(INK_DIM)
    c.setFont(FONT, 9)
    c.drawString(MARGIN, 54, "zuPasha \u00b7 TsuPasai")
    c.drawRightString(PAGE_W - MARGIN, 54, "zuhayrsapha@gmail.com")

    c.showPage()
    c.save()


if __name__ == "__main__":
    build()
    print("Wrote Review_Request.pdf")
