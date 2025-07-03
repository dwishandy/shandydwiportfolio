// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  // Animate hamburger menu
  const lines = mobileMenuBtn.querySelectorAll("div");
  if (mobileMenu.classList.contains("active")) {
    lines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    lines[1].style.opacity = "0";
    lines[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    lines[0].style.transform = "none";
    lines[1].style.opacity = "1";
    lines[2].style.transform = "none";
  }
});

// Close mobile menu when clicking on links
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    const lines = mobileMenuBtn.querySelectorAll("div");
    lines[0].style.transform = "none";
    lines[1].style.opacity = "1";
    lines[2].style.transform = "none";
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.8)";
  }
});
