const slider = document.getElementById("slider");
const slides = Array.from(slider.children);

let count = 0;

const id = setInterval(function () {
  if (count > 100 * slides.length - 1) {
    count = 0;
  }
  console.log("Called");
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${count * 10}%)`;
  });
  count++;
}, 10);

// slider.style.transform = "translateX(100%)";
