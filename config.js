window.CONFIG = {
  siteName: "Sri Atmananda Pranayama Yoga Kendra",
  shortName: "SAPYK",
  tagline: "Guided breath practice for a calmer and steadier life.",
  guruName: "Sri Ramesh Rao Nadig",
  phone: "+919900727600",
  phoneDisplay: "+91 99007 27600",
  email: "SriAtmanandaPranayamaYoga@gmail.com",
  addressLine1: "Vivekananda Badavane",
  addressLine2: "Shivamogga, Karnataka, India",
  feeLabel: "Rs. 1000",
  ctaLabel: "Send Enquiry",
  ctaHref: "contact.html#enquire",
  whatsappNumber: "919900727600",
  whatsappMessage: "Hello, I would like to learn more about Sri Atmananda Pranayama Yoga Kendra.",
  nav: [
    { label: "Home", href: "index.html", page: "home" },
    { label: "About", href: "about.html", page: "about" },
    { label: "Programs", href: "programs.html", page: "programs" },
    { label: "Register", href: "register.html", page: "register" },
    { label: "Gallery", href: "gallery.html", page: "gallery" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ],
  images: {
    logo: "assets/images/logo-mark.png",
    hero: "assets/images/hero-sanctuary.png",
    guru: "assets/images/guru-portrait.png",
    story: "assets/images/story-space.png",
    program: "assets/images/program-thumb.png"
  }
};

/* Utility to read CONFIG properties by key path */
window.getConfigValue = function (keyPath) {
  return keyPath.split(".").reduce(function(acc, key) {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, window.CONFIG);
};