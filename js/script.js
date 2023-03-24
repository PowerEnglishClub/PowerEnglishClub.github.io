const menu = document.querySelector("header ul");
document.getElementById("menu-icon").addEventListener("click", function () {
  menu.style.transform = "TranslateX(0)";
  setTimeout(() => {
    menu.style.transform = "TranslateX(100%)";
  }, 3000);
});

const slides = [];
let slide = 0;

function ChangeSlide(sens) {
  slide += sens;
  if (slide < 0) {
    slide = slides.length - 1;
  }
  if (slide > slides.length - 1) {
    slide = 0;
  }
}
