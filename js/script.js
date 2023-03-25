const menu = document.querySelector("header ul");
const left = document.getElementById("left-btn");
const right = document.getElementById("right-btn");
const menuIcon = document.getElementById("menu-icon");
const improving = document.querySelector(".improving .content");

const slides = ["language", "listening", "speaking", "reading", "writing"];
let current = "language";
let slide = 0;

let mouseX,
  initialX = 0;
let mouseY,
  initialY = 0;
let isSwiped = false;
let deviceType;

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

let rectLeft = improving.getBoundingClientRect().left;
let rectTop = improving.getBoundingClientRect().top;

const getXY = (e) => {
  mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
  mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
};

isTouchDevice();

improving.addEventListener(events[deviceType].down, (event) => {
  isSwiped = true;
  getXY(event);
  initialX = mouseX;
  initialY = mouseY;

  console.log("Down");
});

improving.addEventListener(events[deviceType].move, (event) => {
  if (!isTouchDevice()) {
    event.preventDefault();
  }

  if (isSwiped) {
    getXY(event);
    let diffX = mouseX - initialX;
    let diffY = mouseY - initialY;

    if (Math.abs(diffY) < Math.abs(diffX)) {
      diffX > 0 ? ChangeSlide(-1) : ChangeSlide(1);
    }
  }

  console.log("Move");
});

improving.addEventListener(events[deviceType].up, () => {
  isSwiped = false;
  console.log("Up");
});

improving.addEventListener("mouseleave", () => {
  isSwiped = false;
  console.log("Leave");
});

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
