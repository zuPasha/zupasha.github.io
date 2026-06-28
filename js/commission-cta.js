// Updates every commission CTA block on the page to match the current
// open/closed status set in js/commission-status.js.
//
// Looks for any element marked [data-commission-cta], and swaps its
// heading (h2) and lead paragraph (.lead) between the two pre-written
// states below. Both states still point at the same button, since
// "view commission info" is true either way, only the framing above it
// changes.

(function () {
  var ctas = document.querySelectorAll('[data-commission-cta]');
  if (!ctas.length) return;

  var isOpen = typeof window.COMMISSIONS_OPEN === 'boolean' ? window.COMMISSIONS_OPEN : true;

  var copy = {
    open: {
      heading: 'Open for commissions',
      lead: 'Character art, narrative illustration, and design work, all built the same way everything else here is: meaning worked out first, then translated into something finished. Slots are limited so VantaPsy keeps moving.'
    },
    closed: {
      heading: 'Commissions are closed right now',
      lead: "Not taking on new work at the moment, but the pricing, process, and everything else about how commissions work is still up if you want a look, or just want to say hello."
    }
  };

  var state = isOpen ? copy.open : copy.closed;

  ctas.forEach(function (cta) {
    var heading = cta.querySelector('h2');
    var lead = cta.querySelector('.lead');
    if (heading) heading.textContent = state.heading;
    if (lead) lead.textContent = state.lead;
  });
})();
