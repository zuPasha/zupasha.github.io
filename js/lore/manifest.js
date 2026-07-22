// ============================================================
//  LORE MANIFEST
// ============================================================
// Every data file that should be loaded into the Chronology,
// in the exact order it should load.
//
// This order is also the order entries appear in the sidebar
// and the order Previous / Next cycles through, so keep related
// files near each other.
//
// Adding an entry: open the right file below and add it to the
// array in the right position. Done.
//
// Adding a new data file: create the file (it should push onto
// window.LORE_ENTRIES, see any file in js/lore/ for the pattern),
// then add its path here in the right position. Done.
//
// Partial publishing (see the lore branch strategy) is just a
// matter of leaving files off this list. A file can exist in the
// repo without being loaded, simply by omitting it here.
//
// The entries below are placeholders for testing the renderer:
// real content, real files, and the real manifest order will
// replace them ahead of the actual Chronology release.

window.LORE_MANIFEST = [
  "js/lore/events/events.js",
  "js/lore/places/places.js",
  "js/lore/entities/people.js",
  "js/lore/concepts/concepts.js",
  "js/lore/substances/objects.js",
  // "js/lore/events/age-of-men.js",
  // "js/lore/entities/gods-major.js",
  // "js/lore/concepts/soul.js"
];
