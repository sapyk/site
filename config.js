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
  whatsappMessage:
    "Namasthe, I would like to know more about the pranayama classes at Sri Atmananda Pranayama Yoga Kendra.",
  designedByName: "Tech SathyA",
  designedByUrl: "https://techsathya.in",
  emailJs: {
    publicKey: "Re87m6KD4XksA-EhI",
    serviceId: "service_xguonok",
    templateId: "template_bbz7cnv",
    autoReplyTemplateId: "template_hw5yama"
  },
  form: {
    submitLabel: "Send Enquiry",
    sendingLabel: "Sending...",
    readyMessage: "Share your details and we will contact you soon.",
    validationMessage: "Please complete all required fields before sending.",
    successMessage: "Thank you. Your enquiry has been sent successfully.",
    errorMessage: "There was a small delivery issue.",
    fallbackMessage: "Your enquiry is being sent through our backup channel now."
  },
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
    program: "assets/images/program-breath.png",
    contact: "assets/images/contact-welcome.png",
    upi: "assets/images/upi-code.png",
    gallery: [
      "assets/images/gallery-featured.jpg",
      "assets/images/gallery-01.png",
      "assets/images/gallery-02.png",
      "assets/images/gallery-03.png",
      "assets/images/gallery-04.png",
	  "assets/images/gallery-05.png",
      "assets/images/gallery-06.png"
    ]
  }
};

window.getConfigValue = function getConfigValue(path) {
  return path.split(".").reduce(function readPart(value, key) {
    if (value && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key];
    }
    return undefined;
  }, window.CONFIG);
};
