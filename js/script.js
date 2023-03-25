const menu = document.querySelector("header ul");
const left = document.getElementById("left-btn");
const right = document.getElementById("right-btn");
const menuIcon = document.getElementById("menu-icon");

const slides = ["language", "listening", "speaking", "reading", "writing"];
let current = "language";
let slide = 0;

menuIcon.addEventListener("click", function () {
  menu.style.transform = "TranslateX(0)";
  setTimeout(() => {
    menu.style.transform = "TranslateX(100%)";
  }, 3000);
});

left.addEventListener("click", function () {
  ChangeSlide(-1);
});

right.addEventListener("click", function () {
  ChangeSlide(1);
});

function ChangeSlide(sens) {
  slide += sens;
  if (slide < 0) {
    slide = slides.length - 1;
  }
  if (slide > slides.length - 1) {
    slide = 0;
  }

  document.getElementById(current).className = "hidden";
  document.getElementById(slides[slide]).className = "skill";

  current = slides[slide];
}
