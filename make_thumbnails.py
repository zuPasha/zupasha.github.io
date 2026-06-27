#!/usr/bin/env python3
"""
Generates lightweight thumbnails for everything under images/portfolio,
mirroring the existing folder structure into images/portfolio/thumbs/.

This is the actual fix for slow-loading thumbnails: the grid and gallery
views were loading full-resolution art at thumbnail size, so the browser
downloaded every full image just to shrink it with CSS. This script
creates real small copies once, and main.js now points the grid views at
those instead. The lightbox still opens the original full-resolution file
when you click an image, nothing loses quality there.

Usage, from the root of the website project (same folder as index.html):

    pip install pillow --break-system-packages
    python3 make_thumbnails.py

(Drop --break-system-packages if that flag isn't recognised on your setup,
it's only needed on some Linux installs that lock down the system Python.)

Re-run this any time new art gets added to images/portfolio. It's safe to
re-run, existing thumbnails just get overwritten with fresh ones. It will
not touch anything outside images/portfolio/thumbs.
"""

from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Pillow isn't installed. Run: pip install pillow")
    raise SystemExit(1)

SOURCE_DIR = Path("images/portfolio")
THUMBS_DIR = SOURCE_DIR / "thumbs"
MAX_DIMENSION = 700   # longest side, in pixels. Raise this if thumbnails
                       # look soft on a high-resolution screen, lower it
                       # for even faster loads.
QUALITY = 80           # 0-100, only used for webp/jpeg output

VALID_EXTENSIONS = {".webp", ".jpg", ".jpeg", ".png"}


def make_thumbnail(source_path: Path, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source_path) as im:
        if im.mode in ("P", "CMYK"):
            im = im.convert("RGB")

        width, height = im.size
        if max(width, height) > MAX_DIMENSION:
            if width >= height:
                new_width = MAX_DIMENSION
                new_height = round(height * (MAX_DIMENSION / width))
            else:
                new_height = MAX_DIMENSION
                new_width = round(width * (MAX_DIMENSION / height))
            im = im.resize((new_width, new_height), Image.LANCZOS)

        ext = out_path.suffix.lower()
        save_kwargs = {}
        if ext == ".webp":
            save_kwargs = {"quality": QUALITY, "method": 6}
        elif ext in (".jpg", ".jpeg"):
            save_kwargs = {"quality": QUALITY, "optimize": True}

        im.save(out_path, **save_kwargs)


def main() -> None:
    if not SOURCE_DIR.exists():
        print(f"Couldn't find {SOURCE_DIR}. Run this from the project root, "
              f"the same folder as index.html.")
        return

    count = 0
    for path in SOURCE_DIR.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in VALID_EXTENSIONS:
            continue
        if THUMBS_DIR in path.parents:
            continue  # don't re-thumbnail thumbnails

        relative = path.relative_to(SOURCE_DIR)
        out_path = THUMBS_DIR / relative

        make_thumbnail(path, out_path)
        count += 1
        print(f"  {relative}")

    print(f"\nDone. Generated {count} thumbnail(s) in {THUMBS_DIR}")


if __name__ == "__main__":
    main()
