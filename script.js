document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});
