// ============================================================
//  LORE RENDERER
// ============================================================
// Owns all lore page state and rendering: the timeline strip,
// the sidebar (tabs, age filter, entry list), the content area
// (Primer or an entry), and the mobile FAB overlay.
//
// window.LoreRenderer.init(entries) is called once by loader.js
// after every manifest file has loaded.
//
// EXPUNGEMENT: Any text wrapped in ~~double tildes~~ is replaced
// with [EXPUNGED] and is never shown to the user.

window.LoreRenderer = (function () {

  var AGES = [
    { id: 'age-of-men',        label: 'Men' },
    { id: 'age-of-gods',       label: 'Gods' },
    { id: 'age-of-fairytales', label: 'Fairytales' },
    { id: 'age-of-magic',      label: 'Magic' },
    { id: 'age-of-knowledge',  label: 'Knowledge' },
    { id: 'age-of-decay',      label: 'Decay' }
  ];

  var CATEGORIES = [
    { id: 'events',     label: 'Events' },
    { id: 'places',     label: 'Places' },
    { id: 'entities',   label: 'Entities' },
    { id: 'concepts',   label: 'Concepts' },
    { id: 'substances', label: 'Substances' },
    { id: 'bestiary',   label: 'Bestiary' }
  ];

  var MOBILE_BREAKPOINT = 760;
  var GAP_COUNT = AGES.length - 1;

  // ---- state ----
  var entries = [];
  var nameMap = [];
  var activeCategory = CATEGORIES[0].id;
  var activeAgeFilter = '';
  var activeEntryId = null;
  var descriptionMode = 'simple';
  var searchQuery = '';
  var searchAll = false;

  // ---- cached elements ----
  var els = {};
  var tooltipEl = null;
  var tooltipTimeout = null;

  // ============================================================
  //  EXPUNGEMENT HANDLER
  // ============================================================
  /**
   * Permanently replaces ~~text~~ with [EXPUNGED].
   * The original content is never shown to the user.
   */
  function expungeText(text) {
    if (!text) return text;
    return text.replace(/~~(.*?)~~/g, '[EXPUNGED]');
  }

  // ============================================================
  //  PARSER
  // ============================================================
  function parseLoreText(text) {
    if (!text) return [];
    var lines = text.split('\n');
    var sections = [];
    var i = 0;
    var buffer = [];

    function flushBuffer(type, content) {
      if (buffer.length === 0) return;
      var joined = buffer.join(' ').trim();
      if (joined) {
        sections.push({ type: type, content: joined });
      }
      buffer = [];
    }

    while (i < lines.length) {
      var line = lines[i].trim();
      var nextLine = (i + 1 < lines.length) ? lines[i + 1].trim() : '';

      if (line === '') {
        if (buffer.length > 0) {
          flushBuffer('paragraph', buffer);
        }
        i++;
        continue;
      }

      var isShort = line.length < 60;
      var isPunctuationEnd = /[.!?]$/.test(line);
      var isNumbered = /^\d+[.)]/.test(line) || /^[-*•]/.test(line);
      var isHeader = isShort && !isPunctuationEnd && !isNumbered;

      if (isHeader) {
        if (buffer.length > 0) {
          flushBuffer('paragraph', buffer);
        }
        var isMainHeader = (i + 1 < lines.length && lines[i + 1].trim() === '');
        var headerType = isMainHeader ? 'header' : 'subheader';
        sections.push({ type: headerType, content: line });
        i++;
        if (isMainHeader && i < lines.length && lines[i].trim() === '') {
          i++;
        }
        continue;
      }

      buffer.push(line);
      i++;

      if (i < lines.length) {
        var nextCheck = lines[i].trim();
        var nextIsShort = nextCheck.length < 60;
        var nextIsPunctEnd = /[.!?]$/.test(nextCheck);
        var nextIsNumbered = /^\d+[.)]/.test(nextCheck) || /^[-*•]/.test(nextCheck);
        var nextIsHeader = nextIsShort && !nextIsPunctEnd && !nextIsNumbered;

        if (nextCheck === '' || nextIsHeader) {
          flushBuffer('paragraph', buffer);
        }
      }
    }

    if (buffer.length > 0) {
      flushBuffer('paragraph', buffer);
    }

    return sections;
  }

  function renderLoreProse(text, currentId) {
    if (!text) return '';

    // Expunge content BEFORE parsing so it never reaches the user
    var processedText = expungeText(text);

    var sections = parseLoreText(processedText);
    var html = '';

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var linkedContent = colorizeText(renderProseWithLinks(section.content, currentId));

      if (section.type === 'header') {
        html += '<h3>' + linkedContent + '</h3>';
      } else if (section.type === 'subheader') {
        html += '<h4>' + linkedContent + '</h4>';
      } else if (section.type === 'paragraph') {
        html += '<p>' + linkedContent + '</p>';
      }
    }

    return html;
  }

  // ---- state ----
  var timelineCollapsed = false;

  // ============================================================
  //  INIT
  // ============================================================
  function init(allEntries) {
    entries = (allEntries || []).filter(function (e) { return e.category !== 'overview'; });

    cacheEls();
    buildNameMap();
    wireStaticUI();
    buildSidebarStructure();
    createSearch();
    wireEntryListScroll();
    watchHeaderHeight();
    createTooltip();

    renderTabs();
    renderAgeFilter();
    renderEntryList();
    renderTimeline();
    renderPrimer();

    setupTooltips();
  }

  function cacheEls() {
    els.timelineTrack = document.getElementById('lore-timeline-track');
    els.tabs = document.getElementById('lore-tabs');
    els.ageSelect = document.getElementById('lore-age-select');
    els.entryList = document.getElementById('lore-entry-list');
    els.content = document.getElementById('lore-content');
    els.sidebar = document.getElementById('lore-sidebar');
    els.scrim = document.getElementById('lore-sidebar-scrim');
    els.fab = document.getElementById('lore-fab');
  }

  // ============================================================
  //  TOOLTIP
  // ============================================================
  function createTooltip() {
    if (document.querySelector('.lore-tooltip')) return;
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'lore-tooltip';
    tooltipEl.innerHTML = '<div class="tooltip-name"></div><div class="tooltip-badges"></div><div class="tooltip-short"></div>';
    document.body.appendChild(tooltipEl);
  }

  function setupTooltips() {
    if (!els.content) return;
    els.content.removeEventListener('mouseover', onLinkHover);
    els.content.removeEventListener('mouseout', onLinkLeave);
    els.content.addEventListener('mouseover', onLinkHover);
    els.content.addEventListener('mouseout', onLinkLeave);
  }

  function onLinkHover(e) {
    var link = e.target.closest('.lore-crosslink');
    if (!link) {
      hideTooltip();
      return;
    }
    var entryId = link.getAttribute('data-entry-id');
    if (!entryId) {
      hideTooltip();
      return;
    }
    var entry = findEntry(entryId);
    if (!entry) {
      hideTooltip();
      return;
    }

    var nameEl = tooltipEl.querySelector('.tooltip-name');
    var badgesEl = tooltipEl.querySelector('.tooltip-badges');
    var shortEl = tooltipEl.querySelector('.tooltip-short');

    nameEl.textContent = entry.name || 'Untitled';

    var ageLabelText = entry.age ? ageLabel(entry.age) : '';
    var categoryLabelText = entry.category ? categoryLabel(entry.category) : '';
    var badgeText = [];
    if (ageLabelText) badgeText.push(ageLabelText);
    if (categoryLabelText) badgeText.push(categoryLabelText);
    badgesEl.textContent = badgeText.join('  ·  ');

    // Expunge the short description in tooltips too
    shortEl.innerHTML = entry.short ? colorizeText(escapeHtml(expungeText(entry.short))) : '(No description)';

    var rect = link.getBoundingClientRect();
    var tooltipWidth = Math.min(320, window.innerWidth - 24);
    var left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    left = Math.max(12, Math.min(left, window.innerWidth - tooltipWidth - 12));

    tooltipEl.style.opacity = '0';
    tooltipEl.style.transform = 'translateY(4px)';
    tooltipEl.classList.remove('is-above');
    tooltipEl.style.maxWidth = tooltipWidth + 'px';
    tooltipEl.style.left = left + 'px';
    tooltipEl.style.top = (rect.bottom + 8) + 'px';

    tooltipEl.classList.add('is-visible');
    void tooltipEl.offsetHeight;
    var actualHeight = tooltipEl.offsetHeight;
    var bottomEdge = rect.bottom + 8 + actualHeight + 12;

    if (bottomEdge > window.innerHeight) {
      var aboveTop = rect.top - actualHeight - 8;
      if (aboveTop < 0) {
        aboveTop = 8;
      }
      tooltipEl.style.top = aboveTop + 'px';
      tooltipEl.classList.add('is-above');
    } else {
      tooltipEl.classList.remove('is-above');
    }

    var newLeft = Math.max(12, Math.min(left, window.innerWidth - tooltipWidth - 12));
    tooltipEl.style.left = newLeft + 'px';

    tooltipEl.style.opacity = '';
    tooltipEl.style.transform = '';
  }

  function onLinkLeave(e) {
    var link = e.target.closest('.lore-crosslink');
    if (link) {
      var relatedTarget = e.relatedTarget;
      if (relatedTarget && relatedTarget.closest && relatedTarget.closest('.lore-crosslink')) {
        return;
      }
    }
    hideTooltip();
  }

  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.classList.remove('is-visible');
    }
  }

  function showAgeTooltip(ageId, element) {
    if (!tooltipEl) return;

    var events = entries.filter(function (e) { return e.age === ageId && e.category === 'events'; });
    var ageLabel = ageId.replace('age-of-', '').replace('-', ' ').replace(/\b\w/g, function (l) { return l.toUpperCase(); });

    var nameHtml = '<span class="tooltip-age-title">' + ageLabel + '</span>';
    var badgesText = events.length + ' event' + (events.length > 1 ? 's' : '');
    var shortText = events.length > 0
        ? events.map(function (e) { return e.name; }).join(' · ')
        : 'No events recorded for this age';

    tooltipEl.querySelector('.tooltip-name').innerHTML = nameHtml;
    tooltipEl.querySelector('.tooltip-badges').textContent = badgesText;
    tooltipEl.querySelector('.tooltip-short').textContent = shortText;

    var rect = element.getBoundingClientRect();
    var tooltipWidth = Math.min(320, window.innerWidth - 24);
    var left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    left = Math.max(12, Math.min(left, window.innerWidth - tooltipWidth - 12));

    tooltipEl.style.maxWidth = tooltipWidth + 'px';
    tooltipEl.style.left = left + 'px';
    tooltipEl.style.top = (rect.bottom + 8) + 'px';

    tooltipEl.classList.remove('is-above');
    tooltipEl.classList.add('is-visible');

    var actualHeight = tooltipEl.offsetHeight;
    var bottomEdge = rect.bottom + 8 + actualHeight + 12;
    if (bottomEdge > window.innerHeight) {
        var aboveTop = rect.top - actualHeight - 8;
        if (aboveTop < 0) aboveTop = 8;
        tooltipEl.style.top = aboveTop + 'px';
        tooltipEl.classList.add('is-above');
    }
  }

  // ============================================================
  //  STATIC UI WIRING
  // ============================================================
  function wireStaticUI() {
    if (els.fab) {
      els.fab.addEventListener('click', function () {
        var open = !els.sidebar.classList.contains('is-open');
        setSidebarOpen(open);
      });
    }
    if (els.scrim) {
      els.scrim.addEventListener('click', function () { setSidebarOpen(false); });
    }
    if (els.ageSelect) {
      els.ageSelect.addEventListener('change', function () {
        activeAgeFilter = els.ageSelect.value;
        renderEntryList();
      });
    }
    window.addEventListener('resize', debounce(function () {
      renderTimeline();
    }, 150));
  }

  function setSidebarOpen(open) {
    if (!els.sidebar || !els.scrim || !els.fab) return;
    els.sidebar.classList.toggle('is-open', open);
    els.scrim.classList.toggle('is-open', open);
    els.fab.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function watchHeaderHeight() {
    function measure() {
      var header = document.querySelector('.site-header');
      if (!header) return;
      document.documentElement.style.setProperty('--lore-header-h', header.offsetHeight + 'px');
    }
    measure();
    document.addEventListener('partials:loaded', measure);
    window.addEventListener('resize', debounce(measure, 150));
  }

  function updateTimelineHeight() {
    var timeline = document.querySelector('.lore-timeline');
    if (timeline) {
      var isCollapsed = timeline.classList.contains('is-collapsed');
      var h = isCollapsed ? 0 : 96;
      document.documentElement.style.setProperty('--lore-timeline-h', h + 'px');
    }
  }

  document.addEventListener('timelineToggled', updateTimelineHeight);
  setTimeout(updateTimelineHeight, 100);

  function isMobile() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  function debounce(fn, wait) {
    var t;
    return function () {
      clearTimeout(t);
      var args = arguments;
      t = setTimeout(function () { fn.apply(null, args); }, wait);
    };
  }

  // ============================================================
  //  SEARCH
  // ============================================================
  function createSearch() {
    var header = els.sidebar.querySelector('.lore-sidebar-header');
    if (!header) return;
    if (header.querySelector('.lore-search-wrapper')) return;

    var wrapper = document.createElement('div');
    wrapper.className = 'lore-search-wrapper';

    var input = document.createElement('input');
    input.className = 'lore-search';
    input.type = 'text';
    input.placeholder = 'Search entries...';
    input.setAttribute('aria-label', 'Search lore entries');
    wrapper.appendChild(input);

    var toggle = document.createElement('button');
    toggle.className = 'lore-search-toggle';
    toggle.setAttribute('aria-label', 'Toggle search scope');
    toggle.innerHTML = '📂';
    toggle.title = 'Search current category only';
    wrapper.appendChild(toggle);

    var existingSearch = header.querySelector('.lore-search');
    if (existingSearch) {
      header.replaceChild(wrapper, existingSearch);
    } else {
      header.appendChild(wrapper);
    }

    var searchInput = wrapper.querySelector('.lore-search');
    var searchToggle = wrapper.querySelector('.lore-search-toggle');

    searchInput.addEventListener('input', function () {
      searchQuery = this.value.trim().toLowerCase();
      renderEntryList();
    });

    searchToggle.addEventListener('click', function () {
      searchAll = !searchAll;
      this.innerHTML = searchAll ? '🌐' : '📂';
      this.title = searchAll ? 'Search all entries' : 'Search current category only';
      this.classList.toggle('is-active', searchAll);
      renderEntryList();
    });
  }

  // ============================================================
  //  CROSS-LINK MAP
  // ============================================================
  function buildNameMap() {
    var list = [];
    entries.forEach(function (e) {
      if (e.name) list.push({ text: e.name, id: e.id });
      (e.aliases || []).forEach(function (alias) {
        if (alias) list.push({ text: alias, id: e.id });
      });
    });
    list.sort(function (a, b) { return b.text.length - a.text.length; });
    nameMap = list;
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Fixed palette of colors the lore data is allowed to request.
  // Data files write {{key}}text{{/key}} instead of raw HTML, so the
  // markup survives escapeHtml() and still can't inject arbitrary tags.
  var LORE_COLORS = {
    red: '#B64250',
    white: '#E7F0EF',
    synthwhite: '#D2F2F5',
    black: '#525252',
    green: '#86AF58',
    gold: '#C5A169',
    blue: '#276BAA',
    pink: '#D898A5',
    purple: '#6C56B7'
  };

  var COLOR_TAG_RE = /\{\{(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g;

  // Turns {{color}}text{{/color}} into a real <span> once we're already
  // working with HTML-safe (escaped) text. Unknown color keys just drop
  // the markers and keep the text.
  function colorizeText(html) {
    if (!html) return html;
    return html.replace(COLOR_TAG_RE, function (match, key, inner) {
      var color = LORE_COLORS[key.toLowerCase()];
      if (!color) return inner;
      return '<span style="color: ' + color + ';">' + inner + '</span>';
    });
  }

  // For plain-text contexts (tooltips, truncated snippets) that never
  // render HTML: drop the color markers instead of converting them.
  function stripColorMarkup(text) {
    if (!text) return text;
    return text.replace(COLOR_TAG_RE, '$2');
  }

  function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function renderProseWithLinks(rawText, currentId) {
    var escaped = escapeHtml(rawText);
    var candidates = nameMap.filter(function (n) { return n.id !== currentId; });
    if (!candidates.length || !escaped) return escaped;

    var pattern = candidates.map(function (n) { return escapeRegExp(n.text); }).join('|');
    var re;
    try {
      re = new RegExp('(?<![A-Za-z0-9])(' + pattern + ')(?![A-Za-z0-9])', 'gi');
    } catch (err) {
      re = new RegExp('(' + pattern + ')', 'gi');
    }

    return escaped.replace(re, function (match) {
      var lower = match.toLowerCase();
      var found = candidates.filter(function (n) { return n.text.toLowerCase() === lower; })[0];
      if (!found) return match;
      return '<a href="#" class="lore-crosslink" data-entry-id="' + found.id + '">' + match + '</a>';
    });
  }

  // ============================================================
  //  TIMELINE
  // ============================================================
  function renderTimeline() {
      if (!els.timelineTrack) return;

      var activeEntry = activeEntryId ? findEntry(activeEntryId) : null;
      var activeAgeIndex = activeEntry ? ageIndex(activeEntry.age) : -1;
      var mobile = isMobile();

      var html = '';
      for (var i = 0; i < AGES.length; i++) {
          var age = AGES[i];
          html += renderAgeNode(age, i === activeAgeIndex);

          if (i < GAP_COUNT) {
              var gapIndexForThisAge = Math.min(i, GAP_COUNT - 1);
              var isExpandedGap = activeAgeIndex > -1 && gapIndexForThisAge === Math.min(activeAgeIndex, GAP_COUNT - 1);
              var flexGrow = 1;
              if (activeAgeIndex > -1 && !mobile) {
                  flexGrow = isExpandedGap ? 80 : (20 / (GAP_COUNT - 1));
              }
              var gapClass = 'timeline-gap' + (isExpandedGap ? ' is-expanded' : '');
              html += '<div class="' + gapClass + '" style="flex-grow:' + flexGrow + '">';
              if (isExpandedGap && !mobile) {
                  html += renderEntryNodesForAge(activeEntry.age, activeEntryId);
              }
              html += '</div>';
          }
      }

      els.timelineTrack.innerHTML = html;

      if (!els.timelineTrack._listenersAdded) {
          els.timelineTrack.addEventListener('click', function (e) {
              var ageNode = e.target.closest('.timeline-age-node');
              if (ageNode) {
                  var ageId = ageNode.getAttribute('data-age-id');
                  var firstEvent = entries.filter(function (e) { return e.age === ageId && e.category === 'events'; })[0];
                  if (firstEvent) {
                      selectEntry(firstEvent.id);
                  } else {
                      activeAgeFilter = ageId;
                      if (els.ageSelect) els.ageSelect.value = activeAgeFilter;
                      renderEntryList();
                      setSidebarOpen(true);
                  }
                  return;
              }

              var entryNode = e.target.closest('.timeline-entry-node');
              if (entryNode) {
                  selectEntry(entryNode.getAttribute('data-entry-id'));
              }
          });

          els.timelineTrack.addEventListener('mouseover', function (e) {
              var ageNode = e.target.closest('.timeline-age-node');
              if (ageNode) {
                  showAgeTooltip(ageNode.getAttribute('data-age-id'), ageNode);
              }
          });

          els.timelineTrack.addEventListener('mouseout', function (e) {
              var related = e.relatedTarget;
              if (related && related.closest && related.closest('.timeline-age-node')) return;
              hideTooltip();
          });

          els.timelineTrack._listenersAdded = true;
      }

      if (els.ageSelect && activeAgeFilter) {
          els.ageSelect.value = activeAgeFilter;
      }
  }

  function renderAgeNode(age, isActive) {
    return '' +
      '<button type="button" class="timeline-age-node' + (isActive ? ' is-active' : '') + '" ' +
      'data-age-id="' + age.id + '" title="Filter the sidebar by ' + age.label + '">' +
      '<span class="node-mark" aria-hidden="true"></span>' +
      '<span class="node-label">' + age.label + '</span>' +
      '</button>';
  }

  function renderEntryNodesForAge(ageId, currentEntryId) {
    var forAge = entries.filter(function (e) { return e.age === ageId; });
    var events = forAge.filter(function (e) { return e.category === 'events'; });
    var others = forAge.filter(function (e) { return e.category !== 'events'; });

    var html = '<div class="timeline-entry-nodes">';

    function addNodes(list, topPct) {
        list.forEach(function (e, idx) {
            var n = idx + 1;
            var pct = (n / (list.length + 1)) * 100;
            var isActiveNode = e.id === currentEntryId;
            html += '<button type="button" class="timeline-entry-node' + (isActiveNode ? ' is-active-node' : '') + '" ' +
                'style="left:' + pct + '%; top:' + topPct + '%;" ' +
                'data-entry-id="' + e.id + '" title="' + escapeHtml(e.name) + '"></button>';
        });
    }

    addNodes(events, 30);
    addNodes(others, 70);

    html += '</div>';
    return html;
  }

  function ageIndex(ageId) {
    for (var i = 0; i < AGES.length; i++) {
      if (AGES[i].id === ageId) return i;
    }
    return -1;
  }

  function ageLabel(ageId) {
    var a = AGES.filter(function (x) { return x.id === ageId; })[0];
    return a ? a.label : ageId;
  }

  // ============================================================
  //  SIDEBAR — tabs
  // ============================================================
  function renderTabs() {
    if (!els.tabs) return;

    var sidebar = els.sidebar;
    var toggle = sidebar.querySelector('.lore-sidebar-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.className = 'lore-sidebar-toggle';
      toggle.setAttribute('aria-label', 'Toggle sidebar');
      toggle.innerHTML = '◀ Minimise';
      toggle.addEventListener('click', function() {
        sidebar.classList.toggle('is-collapsed');
        var isCollapsed = sidebar.classList.contains('is-collapsed');
        toggle.innerHTML = isCollapsed ? '▶' : '◀ Minimise';
        window.dispatchEvent(new Event('resize'));
      });
      sidebar.insertBefore(toggle, sidebar.firstChild);
    }

    var html = CATEGORIES.map(function (cat) {
      var selected = cat.id === activeCategory;
      return '<button type="button" class="lore-tab" role="tab" aria-selected="' + selected + '" ' +
        'data-category-id="' + cat.id + '">' + cat.label + '</button>';
    }).join('');
    els.tabs.innerHTML = html;

    els.tabs.querySelectorAll('.lore-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeCategory = btn.getAttribute('data-category-id');
        renderTabs();
        renderEntryList();
      });
    });
  }

  // ============================================================
  //  SIDEBAR — age filter
  // ============================================================
  function renderAgeFilter() {
    if (!els.ageSelect) return;
    var html = '<option value="">All Ages</option>';
    html += AGES.map(function (a) { return '<option value="' + a.id + '">' + a.label + '</option>'; }).join('');
    els.ageSelect.innerHTML = html;
    els.ageSelect.value = activeAgeFilter;
  }

  // ============================================================
  //  SIDEBAR — entry list
  // ============================================================
  function renderEntryList() {
    if (!els.entryList) return;

    var filtered = entries.filter(function (e) {
      var categoryMatch = e.category === activeCategory;
      var ageMatch = activeAgeFilter === '' || e.age === activeAgeFilter;
      return categoryMatch && ageMatch;
    });

    if (searchQuery) {
      var query = searchQuery.toLowerCase();

      if (searchAll) {
        filtered = entries.filter(function (e) {
          var ageMatch = activeAgeFilter === '' || e.age === activeAgeFilter;
          if (!ageMatch) return false;
          if (e.name && e.name.toLowerCase().includes(query)) return true;
          if (e.aliases && e.aliases.some(function (a) { return a.toLowerCase().includes(query); })) return true;
          var fullText = (e.short || '') + ' ' + (e.full || '');
          return expungeText(fullText).toLowerCase().includes(query);
        });
      } else {
        filtered = filtered.filter(function (e) {
          if (e.name && e.name.toLowerCase().includes(query)) return true;
          if (e.aliases && e.aliases.some(function (a) { return a.toLowerCase().includes(query); })) return true;
          var fullText = (e.short || '') + ' ' + (e.full || '');
          return expungeText(fullText).toLowerCase().includes(query);
        });
      }

      filtered.sort(function (a, b) {
        var aName = a.name ? a.name.toLowerCase().includes(query) : false;
        var bName = b.name ? b.name.toLowerCase().includes(query) : false;
        if (aName && !bName) return -1;
        if (!aName && bName) return 1;
        var aAlias = a.aliases && a.aliases.some(function (al) { return al.toLowerCase().includes(query); });
        var bAlias = b.aliases && b.aliases.some(function (al) { return al.toLowerCase().includes(query); });
        if (aAlias && !bAlias) return -1;
        if (!aAlias && bAlias) return 1;
        return (a.name || '').localeCompare(b.name || '');
      });
    }

    if (!filtered.length) {
      els.entryList.innerHTML = '<p class="lore-entry-empty">No entries found.</p>';
      return;
    }

    var html = '';
    var lastAge = null;

    filtered.forEach(function (e) {
      if (activeAgeFilter === '' && lastAge !== null && e.age !== lastAge) {
        var ageLabelText = ageLabel(e.age);
        html += '<div class="lore-age-separator">' + ageLabelText + '</div>';
      }
      lastAge = e.age;

      var isActive = e.id === activeEntryId;
      html += '<button type="button" class="lore-entry-item' + (isActive ? ' is-active' : '') + '" ' +
        'data-entry-id="' + e.id + '" aria-current="' + (isActive ? 'true' : 'false') + '">' +
        escapeHtml(e.name) + '</button>';
    });

    els.entryList.innerHTML = html;

    els.entryList.querySelectorAll('.lore-entry-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectEntry(btn.getAttribute('data-entry-id'));
        if (isMobile()) setSidebarOpen(false);
      });
    });
  }

  // ============================================================
  //  CONTENT AREA — Primer
  // ============================================================
  function renderPrimer() {
  activeEntryId = null;
  renderTimeline();
  renderEntryList();

  if (!els.content) return;

  var ageIntros = [
    'Age of Men — the world before the Moon. Solmara rose as an empire of scholars and soldiers who believed order could be perfected. Hoshimira bent the knee as vassal. Sahran was born from exile, the outcast kin of Hoshimira driven into scorching deserts. The Curse was a distant whisper. The Scorching Sun ruled an unchanging sky. The Vanta Explosion crystallised Elysium, and the world prepared to break.',
    'Age of Gods — the sky shattered. Lunarkos fell. Bahamut rose from the planet\'s core. The collision tore the boundary between soul and matter. Gods ascended from the wreckage. The Moon was born, scarred and veined. The world was remade in fire, light, and divine will.',
    'Age of Fairytales — from ash, myth took root. The Nine Spirits wove the Barrier between realms. The Phumenar sought the Orb. The First Separation cracked the Rift. Gods and mortals learned to coexist. History became legend, and legend became truth.',
    'Age of Magic — magic became the skeleton of civilisation. Dragons soared. The Ashtar marched. Death gardens bloomed. Sorcery intertwined with steel. The world rebuilt itself on arcane foundations. Wonder was woven into the everyday.',
    'Age of Knowledge — the age of codification and pathology. The Diviners systematised the soul. Orthogenesis engineered new life: the Borenfegens. Magic receded. Technology advanced. The world tried to understand itself, and lost something in the process.',
    'Age of Decay — the present. Perpetual night over Sengetsuki. The Curse in every bloodline. The sun a pale memory on Sundays. Technology and magic wear thin. The accumulated weight of every age presses down, and the world holds its breath for the end, or simply another loop.'
  ];

  var html = '' +
    '<div class="lore-primer">' +
    '<p class="eyebrow">The VantaPsy Chronology</p>' +
    '<h2>A Quick Primer</h2>' +
    '<p>Aerisu remembers itself as time recurs, carrying the Echoes of the past into the future. The VantaPsy Chronology traces that history across six ages, following the civilizations, Spirits, souls, magic, and forces that have shaped the world.</p>' +
    '<p>The Age of Men ends with the Crystallisation of Elysium. The Age of Gods sees Lunarkos descend and the Shattering reshape the world. The Age of Fairytales rebuilds civilisation around magic. The Age of Magic brings the War for the Orb of Souls. The Age of Knowledge gives way to the present darkness. The Age of Decay now stretches across nine years of night, with a city folded by time and a goddess sleeping within an orphanage.</p>' +
    '<p>Magic is potential made manifest through Resonance. Every living thing, memory, desire, and action participates in the same cosmic frame, leaving Echoes that can persist through souls, cultures, places, and even the Stars. Lux connects and sustains these systems. Vanta arises from lack and desire, and when desire becomes self-perpetuating, it becomes the Curse.</p>' +
    '<p>The Chronology follows these forces through Aerisu: the nature of the soul, the Spiral Veins beneath the world, the Spirits and their domains, the memories carried through Recursion, and the many ways existence can bloom, decay, and become something else.</p>' +
    '<p>New to the Chronology? Start with the <a href="#" class="lore-crosslink" data-entry-id="cosmology">VantaPsy Cosmology</a> for a concise overview of the fundamental structure of Aerisu and VantaPsy as a whole.</p>' +
    '<hr style="border:1px solid var(--line);margin:2rem 0;">' +
    '<h2>How to use this page</h2>' +
    '<p>The timeline above tracks six ages of Aerisu. Within each age, the timeline shows two rows of nodes: the top row lists the main <strong>Events</strong> in chronological order, while the bottom row displays all other categories (People, Places, Concepts, etc.) ordered by relevance.</p><p>Select any entry and its age expands to show where that entry sits in time relative to everything else.</p><p>The sidebar on the left lists every entry by category, with an age filter underneath it if you want to narrow things further. You can also search for entries by name, alias, or content.</p><p>Inside an entry, a Simple / Advanced toggle switches between a short version and the full breakdown, and any name you recognise from elsewhere in the Chronology is automatically linked, so you can follow the world wherever it leads.</p>' +
    '<ul class="primer-age-list">' +
    ageIntros.map(function (line) {
      var parts = line.split(' — ');
      return '<li><strong>' + parts[0] + '</strong> ' + parts[1] + '</li>';
    }).join('') +
    '</ul>' +
    '<p class="text-dim">This page is a work in progress. Entries are being added as the Chronology and the game come together.</p>' +
    '</div>';

  els.content.innerHTML = html;
  setupTooltips();

  // Wire up any crosslinks in the primer
  els.content.querySelectorAll('.lore-crosslink').forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      selectEntry(link.getAttribute('data-entry-id'));
    });
  });
}

  // ============================================================
  //  CONTENT AREA — entry view
  // ============================================================
  function selectEntry(id) {
    var entry = findEntry(id);
    if (!entry) {
      renderPrimer();
      return;
    }

    activeEntryId = id;
    activeCategory = entry.category;
    renderTabs();
    renderEntryList();
    renderTimeline();
    renderEntryContent(entry);

    if (els.content) els.content.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderEntryContent(entry) {
    if (!els.content) return;

    var body = descriptionMode === 'simple' ? entry.short : entry.full;
    var prose = renderLoreProse(body, entry.id);

    var relatedEntries = (entry.related || [])
      .map(function (id) { return findEntry(id); })
      .filter(Boolean);

    var neighbours = neighbourEntries(entry.id);

    var html = '' +
      '<article class="lore-entry">' +
      '<div class="lore-entry-header">' +
      '<h2>' + escapeHtml(entry.name) + '</h2>' +
      '<div class="lore-toggle" role="group" aria-label="Description length">' +
      '<button type="button" data-mode="simple" class="' + (descriptionMode === 'simple' ? 'is-active' : '') + '">Simple</button>' +
      '<button type="button" data-mode="advanced" class="' + (descriptionMode === 'advanced' ? 'is-active' : '') + '">Advanced</button>' +
      '</div>' +
      '</div>' +
      '<div class="lore-entry-badges">' +
      '<span class="lore-badge lore-badge-age">' + escapeHtml(ageLabel(entry.age)) + '</span>' +
      '<span class="lore-badge">' + escapeHtml(categoryLabel(entry.category)) + '</span>' +
      '</div>' +
      '<div class="lore-prose">' + prose + '</div>' +
      (relatedEntries.length ? renderRelated(relatedEntries) : '') +
      renderNavButtons(neighbours) +
      '</article>';

    els.content.innerHTML = html;
    setupTooltips();

    els.content.querySelectorAll('.lore-toggle button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        descriptionMode = btn.getAttribute('data-mode');
        renderEntryContent(entry);
      });
    });

    els.content.querySelectorAll('.lore-crosslink').forEach(function (link) {
      link.addEventListener('click', function (evt) {
        evt.preventDefault();
        selectEntry(link.getAttribute('data-entry-id'));
      });
    });

    els.content.querySelectorAll('.lore-related-card').forEach(function (card) {
      card.addEventListener('click', function () {
        selectEntry(card.getAttribute('data-entry-id'));
      });
    });

    els.content.querySelectorAll('.lore-nav-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectEntry(btn.getAttribute('data-entry-id'));
      });
    });
  }

  function renderRelated(relatedEntries) {
    var cards = relatedEntries.map(function (e) {
      return '' +
        '<button type="button" class="lore-related-card" data-entry-id="' + e.id + '">' +
        '<span class="related-name">' + escapeHtml(e.name) + '</span>' +
        '<span class="related-snippet">' + escapeHtml(truncate(e.short ? stripColorMarkup(expungeText(e.short)) : '', 90)) + '</span>' +
        '</button>';
    }).join('');
    return '<div class="lore-related"><h4>Related Entries</h4><div class="lore-related-grid">' + cards + '</div></div>';
  }

  function renderNavButtons(neighbours) {
    if (!neighbours.prev && !neighbours.next) return '';
    var prevHtml = neighbours.prev ?
      '<button type="button" class="lore-nav-btn" data-entry-id="' + neighbours.prev.id + '">' +
      '<span class="nav-dir">&larr; Previous</span><span class="nav-name">' + escapeHtml(neighbours.prev.name) + '</span></button>' :
      '<span></span>';
    var nextHtml = neighbours.next ?
      '<button type="button" class="lore-nav-btn" data-entry-id="' + neighbours.next.id + '">' +
      '<span class="nav-dir">Next &rarr;</span><span class="nav-name">' + escapeHtml(neighbours.next.name) + '</span></button>' :
      '<span></span>';
    return '<div class="lore-nav-buttons">' + prevHtml + nextHtml + '</div>';
  }

  function neighbourEntries(id) {
    var idx = entries.findIndex(function (e) { return e.id === id; });
    if (idx === -1 || entries.length < 2) return { prev: null, next: null };
    var prevIdx = (idx - 1 + entries.length) % entries.length;
    var nextIdx = (idx + 1) % entries.length;
    return {
      prev: prevIdx === idx ? null : entries[prevIdx],
      next: nextIdx === idx ? null : entries[nextIdx]
    };
  }

  function categoryLabel(id) {
    var c = CATEGORIES.filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }

  function truncate(text, max) {
    if (!text) return '';
    if (text.length <= max) return text;
    return text.slice(0, max).replace(/\s+\S*$/, '') + '\u2026';
  }

  function findEntry(id) {
    return entries.filter(function (e) { return e.id === id; })[0] || null;
  }

  // ============================================================
  //  SIDEBAR STRUCTURE & SCROLL
  // ============================================================
  function buildSidebarStructure() {
    var sidebar = els.sidebar;
    var entryList = els.entryList;

    if (sidebar.querySelector('.lore-sidebar-header')) return;

    var header = document.createElement('div');
    header.className = 'lore-sidebar-header';

    var toggle = sidebar.querySelector('.lore-sidebar-toggle');
    var tabs = els.tabs;
    var ageFilter = els.ageSelect ? els.ageSelect.closest('.lore-age-filter') : null;

    var children = Array.from(sidebar.children);
    children.forEach(function(child) {
      if (child !== entryList && child !== header) {
        header.appendChild(child);
      }
    });

    if (toggle && toggle.parentNode === sidebar) {
      header.insertBefore(toggle, header.firstChild);
    }

    if (header.children.length > 0) {
      sidebar.insertBefore(header, sidebar.firstChild);
    }

    entryList.style.flex = '1 1 auto';
    entryList.style.overflowY = 'auto';
    entryList.style.minHeight = '0';
  }

  function wireEntryListScroll() {
    var entryList = els.entryList;
    var header = els.sidebar.querySelector('.lore-sidebar-header');
    if (!entryList || !header) return;

    var lastScrollTop = 0;
    var rafId = null;

    entryList.addEventListener('scroll', function() {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(function() {
        var scrollTop = entryList.scrollTop;

        if (Math.abs(scrollTop - lastScrollTop) < 3) {
          rafId = null;
          return;
        }

        if (scrollTop > 20) {
          header.classList.add('is-compact');
        } else {
          header.classList.remove('is-compact');
        }

        lastScrollTop = scrollTop;
        rafId = null;
      });
    });
  }

  // ============================================================
  //  PUBLIC API
  // ============================================================
  return {
    init: init
  };

})();