document.addEventListener("DOMContentLoaded", () => {
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const mainNav = document.getElementById("main-nav");

  menuToggleBtn.addEventListener("click", () => {
    mainNav.classList.toggle("is-open");

    menuToggleBtn.classList.toggle("is-open");
  });
});
