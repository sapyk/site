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

function initializeEmailJs() {
  if (!window.emailjs || window.__emailJsInitialized || !window.CONFIG.emailJs) {
    return;
  }

  window.emailjs.init(window.CONFIG.emailJs.publicKey);
  window.__emailJsInitialized = true;
}

function setFormFeedback(statusNode, state, message) {
  if (!statusNode) {
    return;
  }

  statusNode.className = "form-status";
  if (state) {
    statusNode.classList.add("form-status--" + state);
  }
  statusNode.textContent = message;
}

function setSubmitState(button, loading) {
  if (!button) {
    return;
  }

  var labelNode = button.querySelector("[data-button-text]");
  button.disabled = loading;
  button.classList.toggle("is-loading", loading);

  if (labelNode) {
    labelNode.textContent = loading ? window.CONFIG.form.sendingLabel : window.CONFIG.form.submitLabel;
  }
}

function ensureHiddenInput(form, name, value) {
  var input = form.querySelector('input[name="' + name + '"]');
  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
}

function buildFormPayload(form) {
  return {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    message: form.message.value.trim(),
    site_name: window.CONFIG.siteName,
    contact_email: window.CONFIG.email,
    contact_phone: window.CONFIG.phoneDisplay,
    whatsapp_number: window.CONFIG.whatsappNumber
  };
}

function submitFallback(form, statusNode) {
  ensureHiddenInput(form, "_subject", "Website enquiry - " + window.CONFIG.siteName);
  ensureHiddenInput(form, "_captcha", "false");
  ensureHiddenInput(form, "_template", "table");
  setFormFeedback(
    statusNode,
    "error",
    window.CONFIG.form.errorMessage + " " + window.CONFIG.form.fallbackMessage
  );

  window.setTimeout(function sendFallback() {
    form.action = "https://formsubmit.co/" + window.CONFIG.email;
    form.method = "POST";
    form.submit();
  }, 500);
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

  var submitButton = form.querySelector('button[type="submit"]');
  var statusNode = document.getElementById("formStatus");
  initializeEmailJs();
  setFormFeedback(statusNode, "info", window.CONFIG.form.readyMessage);
  setSubmitState(submitButton, false);

  form.addEventListener("submit", async function handleSubmit(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      setFormFeedback(statusNode, "error", window.CONFIG.form.validationMessage);
      return;
    }

    var payload = buildFormPayload(form);
    setSubmitState(submitButton, true);
    setFormFeedback(statusNode, "info", window.CONFIG.form.sendingLabel);

    try {
      initializeEmailJs();
      if (!window.emailjs) {
        throw new Error("EmailJS SDK unavailable");
      }

      await window.emailjs.send(
        window.CONFIG.emailJs.serviceId,
        window.CONFIG.emailJs.templateId,
        payload
      );

      try {
        await window.emailjs.send(
          window.CONFIG.emailJs.serviceId,
          window.CONFIG.emailJs.autoReplyTemplateId,
          {
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            site_name: window.CONFIG.siteName
          }
        );
      } catch (autoReplyError) {
        console.error("EmailJS auto-reply failed", autoReplyError);
      }

      form.reset();
      setFormFeedback(statusNode, "success", window.CONFIG.form.successMessage);
    } catch (error) {
      console.error("EmailJS main send failed", error);
      submitFallback(form, statusNode);
    } finally {
      setSubmitState(submitButton, false);
    }
  });
}

document.addEventListener("DOMContentLoaded", function bootSite() {
  applyConfigValues();
  setupNavToggle();
  setupStickyHeader();
  setupRevealAnimations();
  setupContactForm();
});

