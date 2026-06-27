// ============================================================
//  HELPER: linkify text
// ============================================================
function linkify(text) {
  if (!text) return '';
  let escaped = text.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
  return escaped.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}

// ============================================================
//  DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

  // ============================================================
  //  LIGHTBOX – FINAL WORKING VERSION
  // ============================================================
  const lightboxOverlay = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const resetBtn = document.getElementById('lightbox-reset');
  const imgWrap = document.getElementById('lightbox-wrap');

  let allImages = [];
  let currentIndex = 0;

  // Natural dimensions (set when image loads)
  let naturalW = 0, naturalH = 0;
  let fitScale = 1;
  let zoomLevel = 1;
  let panX = 0, panY = 0;
  const MAX_ZOOM = 10;

  let isDragging = false;
  let hasDragged = false;
  let startX, startY, startPanX, startPanY;

  // ----- compute the scale that fits the image inside the container -----
  function computeFitScale() {
    if (naturalW === 0 || naturalH === 0) return 1;
    const rect = imgWrap.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    if (w === 0 || h === 0) return 1;
    return Math.min(w / naturalW, h / naturalH, 1);
  }

  // ----- apply the transform (translate + scale) -----
  function applyTransform() {
    if (!lightboxImg || naturalW === 0 || naturalH === 0) return;
    const rect = imgWrap.getBoundingClientRect();
    const cw = rect.width, ch = rect.height;
    if (cw === 0 || ch === 0) return;

    const scaledW = naturalW * zoomLevel;
    const scaledH = naturalH * zoomLevel;

    // Clamp pan so the image never leaves the viewport
    const maxPanX = Math.max(0, (scaledW - cw) / 2);
    const maxPanY = Math.max(0, (scaledH - ch) / 2);
    panX = Math.min(maxPanX, Math.max(-maxPanX, panX));
    panY = Math.min(maxPanY, Math.max(-maxPanY, panY));

    // Top-left corner position to center the image, then apply pan
    const offsetX = (cw - scaledW) / 2 + panX;
    const offsetY = (ch - scaledH) / 2 + panY;

    lightboxImg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${zoomLevel})`;
  }

  // ----- reset zoom to fit -----
  function resetZoom() {
    fitScale = computeFitScale();
    zoomLevel = fitScale;
    panX = 0;
    panY = 0;
    applyTransform();
  }

  // ----- image load handler -----
  function onImageLoad() {
    naturalW = lightboxImg.naturalWidth;
    naturalH = lightboxImg.naturalHeight;
    requestAnimationFrame(resetZoom);
  }

  // ----- update lightbox content -----
  function updateLightbox() {
    const img = allImages[currentIndex];
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    lightboxCaption.innerHTML = linkify(img.caption || '');
    lightboxCounter.textContent = `${currentIndex + 1} / ${allImages.length}`;

    if (img.src.includes('pixel/') || img.src.includes('_sheet')) {
      lightboxImg.classList.add('pixelated');
    } else {
      lightboxImg.classList.remove('pixelated');
    }
  }

  // ----- open / close / navigation -----
  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightboxImg.removeEventListener('load', onImageLoad);
    lightboxImg.addEventListener('load', onImageLoad, { once: true });
    if (lightboxImg.complete && lightboxImg.naturalWidth > 0) onImageLoad();
    lightboxOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    hasDragged = false;
  }

  function closeLightbox() {
    lightboxOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    resetZoom();
  }

  function prevImage() {
    if (allImages.length === 0) return;
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    updateLightbox();
    lightboxImg.removeEventListener('load', onImageLoad);
    lightboxImg.addEventListener('load', onImageLoad, { once: true });
    if (lightboxImg.complete && lightboxImg.naturalWidth > 0) onImageLoad();
  }

  function nextImage() {
    if (allImages.length === 0) return;
    currentIndex = (currentIndex + 1) % allImages.length;
    updateLightbox();
    lightboxImg.removeEventListener('load', onImageLoad);
    lightboxImg.addEventListener('load', onImageLoad, { once: true });
    if (lightboxImg.complete && lightboxImg.naturalWidth > 0) onImageLoad();
  }

  // ----- event listeners -----
  if (lightboxOverlay) {
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    resetBtn.addEventListener('click', resetZoom);

    lightboxOverlay.addEventListener('click', function (e) {
      if (e.target === this && !hasDragged) closeLightbox();
      hasDragged = false;
    });

    document.addEventListener('keydown', function (e) {
      if (!lightboxOverlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });

    // ---- wheel zoom (centered on cursor) ----
    lightboxOverlay.addEventListener('wheel', function (e) {
      if (!lightboxOverlay.classList.contains('is-open')) return;
      e.preventDefault();

      const rect = imgWrap.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const delta = e.deltaY > 0 ? -0.12 : 0.12;
      let newZoom = zoomLevel + delta;
      newZoom = Math.min(MAX_ZOOM, Math.max(fitScale, newZoom));
      if (newZoom === zoomLevel) return;

      const oldZoom = zoomLevel;
      const cw = rect.width, ch = rect.height;
      const oldOffsetX = (cw - naturalW * oldZoom) / 2;
      const oldOffsetY = (ch - naturalH * oldZoom) / 2;
      // Point under mouse in image coordinates (relative to image origin)
      const imgX = (mx - (oldOffsetX + panX)) / oldZoom;
      const imgY = (my - (oldOffsetY + panY)) / oldZoom;

      const newOffsetX = (cw - naturalW * newZoom) / 2;
      const newOffsetY = (ch - naturalH * newZoom) / 2;
      panX = mx - newOffsetX - newZoom * imgX;
      panY = my - newOffsetY - newZoom * imgY;

      zoomLevel = newZoom;
      applyTransform();
    }, { passive: false });

    // ---- drag to pan ----
    if (imgWrap) {
      imgWrap.addEventListener('mousedown', function (e) {
        if (zoomLevel <= fitScale * 1.01) return;
        isDragging = true;
        hasDragged = false;
        startX = e.clientX;
        startY = e.clientY;
        startPanX = panX;
        startPanY = panY;
        imgWrap.style.cursor = 'grabbing';
        e.preventDefault();
      });

      document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) hasDragged = true;
        panX = startPanX + dx;
        panY = startPanY + dy;
        applyTransform();
      });

      document.addEventListener('mouseup', function () {
        if (isDragging) {
          isDragging = false;
          if (imgWrap) imgWrap.style.cursor = 'grab';
        }
      });
    }

    // ---- resize ----
    window.addEventListener('resize', function () {
      if (lightboxOverlay.classList.contains('is-open')) resetZoom();
    });
  }

  // ---- helper ----
  function getImageIndex(imgObj) {
    return allImages.indexOf(imgObj);
  }

  // ============================================================
  //  SCREENSHOT GALLERY (game.html)
  // ============================================================
  const screenshotContainer = document.getElementById('screenshot-gallery');
  const galleryCount = document.getElementById('gallery-count');

  if (screenshotContainer && typeof IMAGE_DATA !== 'undefined') {
    const screenshots = IMAGE_DATA.screenshots || [];
    screenshots.forEach(img => allImages.push(img));

    screenshotContainer.innerHTML = '';
    screenshots.forEach(img => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.innerHTML = `
        <img src="${img.src}" alt="${img.alt || ''}" loading="lazy" />
        <p class="gallery-item-caption">${linkify(img.caption || '')}</p>
      `;
      const idx = getImageIndex(img);
      item.addEventListener('click', () => openLightbox(idx));
      screenshotContainer.appendChild(item);
    });

    if (galleryCount) {
      galleryCount.textContent = screenshots.length;
    }
  }

  // ============================================================
  //  PORTFOLIO GALLERIES (portfolio.html)
  // ============================================================
  const featuredContainer = document.getElementById('portfolio-featured');
  const featuredCount = document.getElementById('featured-count');
  const folderGrid = document.getElementById('folder-grid');
  const folderContent = document.getElementById('folder-content');

  const folderState = {};

  if ((featuredContainer || folderGrid) && typeof PORTFOLIO_DATA !== 'undefined') {
    const featuredImages = PORTFOLIO_DATA.featured || [];
    const categories = PORTFOLIO_DATA.categories || [];

    featuredImages.forEach(img => allImages.push(img));
    categories.forEach(cat => {
      (cat.images || []).forEach(item => {
        if (item.type !== 'video') {
          allImages.push(item);
        }
      });
    });

    // ---- render featured ----
    if (featuredContainer) {
      featuredContainer.innerHTML = '';
      featuredImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const imgEl = document.createElement('img');
        imgEl.src = img.src;
        imgEl.alt = img.alt || '';
        imgEl.loading = 'lazy';
        // Apply top crop for character categories
        if (img.src.includes('/character') ||
            img.src.includes('/character2') ||
            img.src.includes('/character3')) {
          imgEl.classList.add('thumb-top');
        }
        item.appendChild(imgEl);

        const caption = document.createElement('p');
        caption.className = 'gallery-item-caption';
        caption.innerHTML = linkify(img.caption || '');
        item.appendChild(caption);

        const idx = getImageIndex(img);
        item.addEventListener('click', () => openLightbox(idx));
        featuredContainer.appendChild(item);
      });
      if (featuredCount) {
        featuredCount.textContent = featuredImages.length;
      }
    }

    // ---- folder cards ----
    let openFolderId = null;

    function renderFolders() {
      if (!folderGrid) return;
      folderGrid.innerHTML = '';
      categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'folder-card';
        card.innerHTML = `
          <div class="folder-card-inner">
            <span class="folder-icon">${cat.icon || '📁'}</span>
            <h3>${cat.label}</h3>
            <span class="folder-count">${(cat.images || []).length} items</span>
          </div>
        `;
        card.addEventListener('click', () => toggleFolder(cat.id));
        folderGrid.appendChild(card);
      });
    }

    function renderFolderPage(category) {
      folderContent.innerHTML = '';

      const items = category.images || [];
      const total = items.length;
      if (total === 0) {
        folderContent.innerHTML = '<p style="color:var(--ink-dim);">No items in this category.</p>';
        return;
      }

      const perPage = 20;
      const currentPage = folderState[category.id]?.page || 0;
      const end = Math.min((currentPage + 1) * perPage, total);
      const slice = items.slice(0, end);

      const isVideo = category.type === 'video';
      const grid = document.createElement('div');
      grid.className = isVideo ? 'video-grid' : 'folder-image-grid';

      slice.forEach(item => {
        if (isVideo) {
          const container = document.createElement('div');
          container.className = 'video-item';
          container.innerHTML = `
            <div class="video-wrapper">
              <iframe src="https://www.youtube.com/embed/${item.videoId}" 
                      title="${item.title || ''}" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
              </iframe>
            </div>
            <p class="video-caption">${item.title || ''}</p>
            ${item.caption ? `<p class="video-description">${item.caption}</p>` : ''}
          `;
          grid.appendChild(container);
        } else {
          const imgItem = document.createElement('div');
          imgItem.className = 'folder-image-item';
          
          const img = document.createElement('img');
          img.src = item.src;
          img.alt = item.alt || '';
          img.loading = 'lazy';
          // Apply top crop for character categories
          if (['character', 'character2', 'character3'].includes(category.id)) {
            img.classList.add('thumb-top');
          }
          imgItem.appendChild(img);

          const caption = document.createElement('p');
          caption.className = 'folder-image-caption';
          caption.innerHTML = linkify(item.caption || '');
          imgItem.appendChild(caption);

          const idx = getImageIndex(item);
          imgItem.addEventListener('click', () => openLightbox(idx));
          grid.appendChild(imgItem);
        }
      });

      folderContent.appendChild(grid);

      if (end < total) {
        const loadBtn = document.createElement('button');
        loadBtn.className = 'load-more-btn';
        loadBtn.textContent = `Load more (${total - end} remaining)`;
        loadBtn.addEventListener('click', function () {
          folderState[category.id].page += 1;
          renderFolderPage(category);
        });
        folderContent.appendChild(loadBtn);
      }
    }

    function toggleFolder(folderId) {
      if (openFolderId === folderId) {
        openFolderId = null;
        folderContent.innerHTML = '';
        return;
      }

      openFolderId = folderId;
      const category = categories.find(c => c.id === folderId);
      if (!category) return;

      if (!folderState[folderId]) {
        folderState[folderId] = { page: 0 };
      } else {
        folderState[folderId].page = 0;
      }

      renderFolderPage(category);
    }

    renderFolders();
  }

  // ============================================================
  //  PORTFOLIO FAB (floating category selector) – mobile only
  // ============================================================
  const fabToggle = document.getElementById('fab-toggle');
  const fabMenu = document.getElementById('fab-menu');

  if (fabToggle && fabMenu && typeof PORTFOLIO_DATA !== 'undefined') {
    // Build category buttons from data
    const categories = PORTFOLIO_DATA.categories || [];
    if (categories.length > 0) {
      fabMenu.innerHTML = '';
      categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat.icon || '📁';
        btn.setAttribute('aria-label', cat.label);
        btn.title = cat.label;
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          // find the folder card element and click it
          const folderCards = document.querySelectorAll('.folder-card');
          let targetCard = null;
          folderCards.forEach(card => {
            const label = card.querySelector('h3')?.textContent;
            if (label === cat.label) {
              targetCard = card;
            }
          });
          if (targetCard) {
            targetCard.click();
            // close the menu
            fabMenu.classList.remove('is-open');
            // scroll to folder content (smoothly)
            const content = document.getElementById('folder-content');
            if (content) {
              setTimeout(() => {
                content.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 300);
            }
          }
        });
        fabMenu.appendChild(btn);
      });
    }

    // Toggle menu on button click
    fabToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      fabMenu.classList.toggle('is-open');
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!fabToggle.contains(e.target) && !fabMenu.contains(e.target)) {
        fabMenu.classList.remove('is-open');
      }
    });
  }

  // ---- filter buttons (if any) ----
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('[data-category]');
  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('is-active'));
        this.classList.add('is-active');
        const category = this.getAttribute('data-filter');
        portfolioItems.forEach(item => {
          const show = category === 'all' || item.getAttribute('data-category') === category;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }
  

  // ============================================================
  //  SCROLL BUTTONS
  // ============================================================
  const topBtn = document.getElementById('scroll-top');
  const bottomBtn = document.getElementById('scroll-bottom');

  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (bottomBtn) {
    bottomBtn.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }
});