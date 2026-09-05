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
  "js/lore/events/age-of-men.js",
  "js/lore/events/age-of-gods.js",
  "js/lore/events/age-of-fairytales.js",
  "js/lore/events/age-of-magic.js",
  "js/lore/events/age-of-knowledge.js",
  "js/lore/events/age-of-decay.js",

  "js/lore/places/hoshimira.js",
  "js/lore/places/sahran.js",
  "js/lore/places/solmara.js",
  "js/lore/places/places.js",

  "js/lore/entities/gods-major.js",
  "js/lore/entities/gods-lesser.js",
  "js/lore/entities/big-names.js",

  "js/lore/concepts/soul.js",
  "js/lore/concepts/vanta.js",
  "js/lore/concepts/cosmic.js",
  "js/lore/concepts/spirit.js",
  "js/lore/concepts/magic.js",
  "js/lore/concepts/frallation.js",
  "js/lore/concepts/practice.js",
  "js/lore/concepts/borenfegen.js",
  "js/lore/concepts/philosophies.js",
  "js/lore/concepts/cosmology.js",

  "js/lore/substances/substances.js",
];
