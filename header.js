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
    '      <div class="header-utility">' +
    '        <div class="social-icons">' +
    '          <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">' +
    '            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V10H7.8v3h2.6v8h3.1Z"/></svg>' +
    "          </a>" +
    '          <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">' +
    '            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.7 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z"/></svg>' +
    "          </a>" +
    '          <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">' +
    '            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 8.3A1.8 1.8 0 1 1 6.2 4.7a1.8 1.8 0 0 1 0 3.6ZM4.8 9.7h2.9V19H4.8V9.7Zm4.6 0h2.8V11h.1c.4-.7 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.7V19h-2.9v-4.3c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V19H9.4V9.7Z"/></svg>' +
    "          </a>" +
    '          <a href="https://www.youtube.com/@AtmanandaPranayama" target="_blank" rel="noreferrer" aria-label="YouTube">' +
    '            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.9 2.9 0 0 0-2-2c-1.8-.5-7.6-.5-7.6-.5s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2A30.2 30.2 0 0 0 2 12a30.2 30.2 0 0 0 .4 4.8 2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2A30.2 30.2 0 0 0 22 12a30.2 30.2 0 0 0-.4-4.8ZM10.2 15.3V8.7l5.4 3.3-5.4 3.3Z"/></svg>' +
    "          </a>" +
    "        </div>" +
    '        <a class="button button--solid header-cta" href="' +
    window.CONFIG.ctaHref +
    '">' +
    window.CONFIG.ctaLabel +
    "</a>" +
    "      </div>" +
    "    </div>" +
    "  </div>" +
    "</header>";
});
