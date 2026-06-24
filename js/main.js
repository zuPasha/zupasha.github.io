// TsuPasai / zuPasha site script
// Handles the mobile nav toggle, the footer year, and the portfolio filter.
// No build step, no dependencies. Plain DOM.

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the menu when a link is tapped (useful on mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year, so it never goes stale
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Portfolio filter (only present on portfolio.html)
  var filterButtons = document.querySelectorAll('.filter-btn');
  var portfolioItems = document.querySelectorAll('[data-category]');

  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');

        var category = btn.getAttribute('data-filter');

        portfolioItems.forEach(function (item) {
          var show = category === 'all' || item.getAttribute('data-category') === category;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }
});
