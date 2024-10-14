const box = document.getElementById("container-inner");

// External CSS file me di gayi values aise milegi.
// console.log("box.style.left", window.getComputedStyle(box).backgroundColor);

function runAnimation() {
  const id = setInterval(function () {
    const left = Number(box.style.left.split("px")[0]);
    if (left < 450) {
      box.style.left = left + 2 + "px";
      box.style.top = left + 2 + "px";
      left += 2;
    } else {
      clearInterval(id);
    }
    console.log("interval running");
  }, 10);
  console.log("id", id);
}
