// Mobile Navigation Toggle
const toggleBtn = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Login Modal (future feature)
const loginBtn = document.getElementById("open-login");
const loginModal = document.getElementById("login-modal");
const closeLogin = document.getElementById("close-login");

loginBtn?.addEventListener("click", () => {
  loginModal.setAttribute("open", "");
});

closeLogin?.addEventListener("click", () => {
  loginModal.removeAttribute("open");
});

// Basic Cart Structure (expand later)
let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  console.log("Producto agregado:", productName, price);
}
