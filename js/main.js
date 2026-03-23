function applyConfigValues() {
  document.querySelectorAll("[data-config-text]").forEach(function updateText(node) {
    var value = window.getConfigValue(node.dataset.configText);
    if (value !== undefined) {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-config-image]").forEach(function updateImage(node) {
    var src = window.getConfigValue(node.dataset.configImage);
    if (src) {
      node.src = src;
    }
  });

  document.querySelectorAll("[data-config-link]").forEach(function updateLink(node) {
    var href = window.getConfigValue(node.dataset.configLink);
    if (href) {
      node.href = href;
    }
  });

  document.querySelectorAll("[data-config-phone-link]").forEach(function updatePhone(node) {
    node.href = "tel:" + window.CONFIG.phone;
  });

  document.querySelectorAll("[data-config-email-link]").forEach(function updateEmail(node) {
    node.href = "mailto:" + window.CONFIG.email;
  });

  document.querySelectorAll("[data-config-whatsapp]").forEach(function updateWhatsApp(node) {
    var encoded = encodeURIComponent(window.CONFIG.whatsappMessage);
    node.href = "https://wa.me/" + window.CONFIG.whatsappNumber + "?text=" + encoded;
  });

  document.querySelectorAll("[data-current-year]").forEach(function updateYear(node) {
    node.textContent = String(new Date().getFullYear());
  });
}

function setupNavToggle() {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", function handleToggle() {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  });

  nav.querySelectorAll("a").forEach(function bindLink(link) {
    link.addEventListener("click", function closeMenu() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

function setupStickyHeader() {
  var header = document.getElementById("siteHeader");
  if (!header) {
    return;
  }

  var setState = function setState() {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  setState();
  window.addEventListener("scroll", setState, { passive: true });
}

function setupRevealAnimations() {
  var items = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    items.forEach(function reveal(node) {
      node.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function observe(entries) {
      entries.forEach(function markVisible(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach(function watch(node) {
    observer.observe(node);
  });
}

function setupContactForm() {
  var form = document.getElementById("enquiryForm");
  if (!form) {
    return;
  }

  var status = document.getElementById("formStatus");
  var openMessage = function openMessage(type) {
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !phone || !email) {
      status.textContent = "Please complete your name, phone number, and email first.";
      return;
    }

    var body = [
      "Namasthe, I would like to enquire about the programs at " + window.CONFIG.siteName + ".",
      "",
      "Name: " + name,
      "Phone: " + phone,
      "Email: " + email,
      "Message: " + (message || "Please share the next batch details."),
      "Fee: " + window.CONFIG.feeLabel
    ].join("\n");

    status.textContent = "Opening your selected contact option.";

    if (type === "whatsapp") {
      var whatsappUrl =
        "https://wa.me/" + window.CONFIG.whatsappNumber + "?text=" + encodeURIComponent(body);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href =
      "mailto:" +
      window.CONFIG.email +
      "?subject=" +
      encodeURIComponent("Program enquiry - " + window.CONFIG.siteName) +
      "&body=" +
      encodeURIComponent(body);
  };

  document.querySelectorAll("[data-send]").forEach(function bindSend(button) {
    button.addEventListener("click", function handleClick() {
      openMessage(button.dataset.send);
    });
  });
}

document.addEventListener("DOMContentLoaded", function bootSite() {
  applyConfigValues();
  setupNavToggle();
  setupStickyHeader();
  setupRevealAnimations();
  setupContactForm();
});
