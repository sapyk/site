document.addEventListener("DOMContentLoaded", function renderHeader() {
  var mount = document.querySelector("[data-site-header]");
  if (!mount || !window.CONFIG) {
    return;
  }

  var currentPage = document.body.dataset.page || "home";
  var navItems = window.CONFIG.nav
    .map(function mapItem(item) {
      var activeClass = item.page === currentPage ? " is-active" : "";
      var currentState = item.page === currentPage ? ' aria-current="page"' : "";

      return (
        '<a class="site-nav__link' +
        activeClass +
        '" href="' +
        item.href +
        '"' +
        currentState +
        ">" +
        item.label +
        "</a>"
      );
    })
    .join("");

  mount.innerHTML =
    '<header class="site-header" id="siteHeader">' +
    '  <div class="container header-bar">' +
    '    <a class="site-brand" href="index.html" aria-label="' +
    window.CONFIG.siteName +
    ' home">' +
    '      <img class="site-brand__logo" src="' +
    window.CONFIG.images.logo +
    '" alt="' +
    window.CONFIG.siteName +
    ' logo" width="64" height="64" />' +
    '      <div class="site-brand__copy">' +
    '        <span class="site-brand__name">' +
    window.CONFIG.siteName +
    "</span>" +
    '        <span class="site-brand__tag">' +
    window.CONFIG.tagline +
    "</span>" +
    "      </div>" +
    "    </a>" +
    '    <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="siteNav" aria-label="Toggle navigation">' +
    "      <span></span><span></span><span></span>" +
    "    </button>" +
    '    <div class="header-actions">' +
    '      <nav class="site-nav" id="siteNav" aria-label="Primary navigation">' +
    navItems +
    "      </nav>" +
    '      <a class="button button--solid header-cta" href="' +
    window.CONFIG.ctaHref +
    '">' +
    window.CONFIG.ctaLabel +
    "</a>" +
    "    </div>" +
    "  </div>" +
    "</header>";
});
