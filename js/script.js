const menu = document.querySelector("header ul");
const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function () {
  menu.style.transform = "TranslateX(0)";
  setTimeout(() => {
    menu.style.transform = "TranslateX(100%)";
  }, 3000);
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
