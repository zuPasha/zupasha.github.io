// ============================================================
//  LORE LOADER
// ============================================================
// Loads every file listed in window.LORE_MANIFEST, in order,
// waiting for each one before requesting the next. Once every
// file has been added (each pushes its entries onto the shared
// window.LORE_ENTRIES array), it hands control to LoreRenderer.
//
// Sequential loading keeps window.LORE_ENTRIES in exactly the
// order the manifest defines, since that order is what the
// sidebar and Previous / Next rely on.

(function () {
  var manifest = window.LORE_MANIFEST || [];
  var index = 0;

  function loadNext() {
    if (index >= manifest.length) {
      finish();
      return;
    }

    var src = manifest[index];
    var script = document.createElement('script');
    script.src = src;

    script.onload = function () {
      index += 1;
      loadNext();
    };

    script.onerror = function () {
      console.error('[lore] Could not load data file: ' + src);
      index += 1;
      loadNext();
    };

    document.body.appendChild(script);
  }

  function finish() {
    if (window.LoreRenderer && typeof window.LoreRenderer.init === 'function') {
      window.LoreRenderer.init(window.LORE_ENTRIES || []);
    } else {
      console.error('[lore] LoreRenderer.init was not found. Make sure js/lore/renderer.js loads before js/lore/loader.js.');
    }
  }

  if (manifest.length === 0) {
    finish();
  } else {
    loadNext();
  }
})();
