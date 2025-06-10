const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");


burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});