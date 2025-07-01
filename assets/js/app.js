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
