(function () {
  var includeTargets = document.querySelectorAll('[data-include]');
  var pending = includeTargets.length;

  if (!pending) return;

  includeTargets.forEach(function (el) {
    var path = el.getAttribute('data-include');

    fetch(path)
      .then(function (response) {
        if (!response.ok) throw new Error('Failed to load ' + path);
        return response.text();
      })
      .then(function (html) {
        el.outerHTML = html;
      })
      .catch(function (err) {
        console.error(err);
      })
      .finally(function () {
        pending -= 1;
        if (pending === 0) onAllIncludesLoaded();
      });
  });

  function onAllIncludesLoaded() {
    setActiveNavLink();
    wireUpNavToggle();
    setFooterYear();
    // In case other scripts want to wait for the header/footer to
    // actually exist before touching them.
    document.dispatchEvent(new CustomEvent('partials:loaded'));
  }

  function setActiveNavLink() {
    var current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      if (link.getAttribute('href') === current) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function wireUpNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function setFooterYear() {
    var yearEl = document.querySelector('[data-year]');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
})();
