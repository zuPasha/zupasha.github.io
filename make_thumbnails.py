#!/usr/bin/env python3
"""
Generates lightweight thumbnails for everything under images/portfolio,
mirroring the existing folder structure into images/portfolio/thumbs/.

Skips thumbnails that already exist.
Re-run safely after adding new art.

"""

from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Pillow isn't installed. Run: pip install pillow")
    raise SystemExit(1)

SOURCE_DIR = Path("images/portfolio")
THUMBS_DIR = SOURCE_DIR / "thumbs"
MAX_DIMENSION = 700
QUALITY = 80

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
        print(f"Couldn't find {SOURCE_DIR}. Run this from the project root.")
        return

    generated = 0
    skipped = 0

    for path in SOURCE_DIR.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in VALID_EXTENSIONS:
            continue
        if THUMBS_DIR in path.parents:
            continue  # don't re-thumbnail thumbnails

        relative = path.relative_to(SOURCE_DIR)
        out_path = THUMBS_DIR / relative

        # ---- SKIP if thumbnail already exists ----
        if out_path.exists():
            skipped += 1
            continue

        make_thumbnail(path, out_path)
        generated += 1
        print(f"  {relative}")

    print(f"\nDone. Generated {generated} new thumbnail(s), skipped {skipped} existing.")
    if generated == 0:
        print("All thumbnails are up to date.")


if __name__ == "__main__":
    main()