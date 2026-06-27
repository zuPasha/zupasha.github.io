// Mailto fallback for every mailto: link on the site.
//
// If clicking a mailto: link doesn't actually open a mail app (no
// default mail client configured, which happens on some browsers and
// locked-down work machines), this copies the email address to the
// clipboard instead and shows a small toast confirming it, so the
// click visibly does something either way.
//
// Detection is a heuristic, not a guarantee: opening an external mail
// app blurs the browser window, so if that doesn't happen within
// about a second, this assumes nothing opened. It can occasionally
// guess wrong (a slow mail client, or a "open this in Mail?" prompt
// the visitor is still looking at), but it fails toward showing the
// copied address rather than silently doing nothing, which is the
// safer direction to be wrong in.

(function () {
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for older browsers or non-HTTPS local testing.
    return new Promise(function (resolve, reject) {
      try {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  function showToast(message) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('is-visible');
    });

    setTimeout(function () {
      toast.classList.remove('is-visible');
      setTimeout(function () { toast.remove(); }, 300);
    }, 3500);
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a[href^="mailto:"]');
    if (!link) return;

    var email = link.getAttribute('href').replace('mailto:', '').split('?')[0];

    // Copy immediately, inside the click handler itself, since some
    // browsers only allow clipboard writes during a direct user
    // gesture and will silently refuse one that happens later inside
    // a setTimeout callback.
    copyText(email).catch(function () {
      // Clipboard write failed outright (permissions, very old
      // browser). Nothing more to do, the mailto link can still work
      // on its own.
    });

    var blurred = false;
    function onBlur() { blurred = true; }
    window.addEventListener('blur', onBlur);

    setTimeout(function () {
      window.removeEventListener('blur', onBlur);
      if (!blurred) {
        showToast('Copied email address to clipboard: ' + email);
      }
    }, 1200);
  });
})();
