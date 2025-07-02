// Toggle Burger Menu on Mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close nav menu when a link is clicked (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// === EmailJS Contact Form ===
(function() {
  emailjs.init("3-PIOc8W2gKVXz4Fp"); // Replace with your EmailJS public key
})();

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show basic feedback (optional)
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const serviceID = "service_5qxaosk";    // Replace with your EmailJS service ID
    const templateID = "template_tpq18qp";  // Replace with your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert("Message sent successfully! ✨");
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, (err) => {
        console.error("Failed to send message:", err);
        alert("Oops! Something went wrong. Please try again later.");
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
  });
}
