document.addEventListener("DOMContentLoaded", function renderFooter() {
  var mount = document.querySelector("[data-site-footer]");
  if (!mount || !window.CONFIG) {
    return;
  }

  var navItems = window.CONFIG.nav
    .map(function mapItem(item) {
      return '<a href="' + item.href + '">' + item.label + "</a>";
    })
    .join("");

  mount.innerHTML =
    '<footer class="site-footer">' +
    '  <div class="container footer-shell">' +
    '    <div class="footer-intro">' +
    '      <p class="section-kicker">Sri Atmananda Pranayama Yoga Kendra</p>' +
    '      <h2 class="footer-title">A sincere learning space for breath, balance, and inner steadiness.</h2>' +
    '      <p class="footer-copy">Guided practice, patient teaching, and a calm atmosphere for those who wish to begin with discipline.</p>' +
    "    </div>" +
    '    <div class="footer-grid">' +
    '      <section class="footer-card">' +
    '        <h3>Contact</h3>' +
    '        <p><a href="tel:' +
    window.CONFIG.phone +
    '">' +
    window.CONFIG.phoneDisplay +
    "</a></p>" +
    '        <p><a href="mailto:' +
    window.CONFIG.email +
    '">' +
    window.CONFIG.email +
    "</a></p>" +
    "        <p>" +
    window.CONFIG.addressLine1 +
    "<br />" +
    window.CONFIG.addressLine2 +
    "</p>" +
    "      </section>" +
    '      <section class="footer-card">' +
    "        <h3>Explore</h3>" +
    '        <div class="footer-links">' +
    navItems +
    "        </div>" +
    "      </section>" +
    '      <section class="footer-card">' +
    "        <h3>Guidance</h3>" +
    '        <p>For class details, fee information, and joining guidance, reach out through phone, WhatsApp, or email.</p>' +
    '        <a class="button button--ghost" href="contact.html#enquire">Start Your Enquiry</a>' +
    "      </section>" +
    "    </div>" +
    '    <div class="footer-bottom">' +
    '      <p>&copy; <span data-current-year></span> ' +
    window.CONFIG.siteName +
    '. All rights reserved.</p>' +
    '      <p>Designed by <a href="' +
    window.CONFIG.designedByUrl +
    '" target="_blank" rel="noreferrer">' +
    window.CONFIG.designedByName +
    "</a></p>" +
    "    </div>" +
    "  </div>" +
    "</footer>";
});
