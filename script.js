const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");
const statusText = document.getElementById("formStatus");
const revealItems = document.querySelectorAll(".reveal");
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function buildRegistrationMessage() {
  const name = document.getElementById("name")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  if (!name || !phone || !email) {
    if (statusText) {
      statusText.textContent = "Please fill in your name, phone number, and email before sending.";
      statusText.style.color = "#8a3121";
    }
    return null;
  }

  if (statusText) {
    statusText.textContent = "Opening your selected app with your registration details.";
    statusText.style.color = "#668b5e";
  }

  return [
    "Namasthe 🙏 I would like to register for the online pranayama course.",
    "",
    `Name: ${name}`,
    `Phone / WhatsApp: ${phone}`,
    `Email: ${email}`,
    `Message: ${message || "I would like to know more about the course."}`,
    "Course Fee: ₹1000",
    "If there are genuine financial constraints, I will contact you separately.",
  ].join("\n");
}

const whatsappButton = document.getElementById("sendWhatsApp");
const emailButton = document.getElementById("sendEmail");

whatsappButton?.addEventListener("click", () => {
  const registrationMessage = buildRegistrationMessage();
  if (!registrationMessage) return;

  const whatsappUrl = `https://wa.me/919900727600?text=${encodeURIComponent(registrationMessage)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

emailButton?.addEventListener("click", () => {
  const registrationMessage = buildRegistrationMessage();
  if (!registrationMessage) return;

  const emailUrl = `mailto:SriAtmanandaPranayamaYoga@gmail.com?subject=${encodeURIComponent("Registration Request - Sri Atmananda Pranayama Yoga Kendra")}&body=${encodeURIComponent(registrationMessage)}`;
  window.location.href = emailUrl;
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
