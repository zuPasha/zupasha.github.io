// Renders REVIEWS_DATA (js/reviews-data.js) into #reviews-list on
// reviews.html. The image side alternates left/right automatically by
// adding .review-row--reverse on every second entry.

document.addEventListener('DOMContentLoaded', function () {
  var list = document.querySelector('#reviews-list');
  if (!list) return;

  var reviews = window.REVIEWS_DATA || [];

  if (!reviews.length) {
    var empty = document.createElement('p');
    empty.className = 'text-dim center';
    empty.textContent = 'Reviews from past commissions will show up here.';
    list.appendChild(empty);
    return;
  }

  reviews.forEach(function (item, index) {
    var row = document.createElement('div');
    row.className = 'review-row' + (index % 2 === 1 ? ' review-row--reverse' : '');

    var figure = document.createElement('div');
    figure.className = 'review-row-figure';

    var cover = document.createElement('div');
    cover.className = 'review-cover';

    var img = document.createElement('img');
    img.className = 'placeholder-art';
    var fullSrc = (item.image && item.image.src) || '';
    img.src = typeof toThumbSrc === 'function' ? toThumbSrc(fullSrc) : fullSrc;
    img.alt = (item.image && item.image.alt) || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onerror = function () {
      this.onerror = null;
      this.src = fullSrc;
    };

    cover.appendChild(img);
    figure.appendChild(cover);

    var body = document.createElement('div');
    body.className = 'review-row-body';

    if (item.commissionType) {
      var meta = document.createElement('span');
      meta.className = 'meta';
      meta.textContent = item.commissionType;
      body.appendChild(meta);
    }

    if (item.blurb) {
      var blurb = document.createElement('p');
      blurb.className = 'hero-tagline review-blurb';
      blurb.textContent = '\u201C' + item.blurb + '\u201D';
      body.appendChild(blurb);
    }

    if (item.review) {
      var reviewText = document.createElement('p');
      reviewText.textContent = item.review;
      body.appendChild(reviewText);
    }

    var attribution = document.createElement('p');
    attribution.className = 'review-attribution';
    attribution.textContent = "- "+item.name || 'Anonymous';
    body.appendChild(attribution);

    row.appendChild(figure);
    row.appendChild(body);
    list.appendChild(row);
  });
});
