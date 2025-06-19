// ✅ Smooth fade-in on scroll for ALL fade-in elements
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1
});

faders.forEach(fader => appearOnScroll.observe(fader));

// ✅ Dark mode toggle with localStorage memory
const themeToggle = document.getElementById("theme-toggle");

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle theme and save preference
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Optional: change icon when toggling
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// ✅ Burger menu toggle
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
