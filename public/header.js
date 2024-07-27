document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav");

  function handleScroll() {
    if (window.scrollY > 0) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  }

  function toggleMenu() {
    mobileMenu.classList.toggle("hidden");
  }

  window.addEventListener("scroll", handleScroll);
  menuButton.addEventListener("click", toggleMenu);
});
