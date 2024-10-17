const btn = document.getElementById("btn");

// console.log(btn.onclick);

btn.onmouseover = function () {
  this.innerText = "Click Me";
};

btn.onmouseout = function () {
  this.innerText = "Print";
};

btn.onmousedown = function () {
  this.innerText = "Click Pressed";
};

btn.onmouseup = function () {
  this.innerText = "Click Released";
};

btn.onclick = function () {
  console.log("JS Function");
};

function one() {
  console.log("one");
}

function two() {
  console.log("two");
}

function three() {
  console.log("three");
}

btn.addEventListener("click", one);
btn.addEventListener("click", two);
btn.addEventListener("click", three);

// btn.removeEventListener("click", one);
// btn.removeEventListener("click", two);
// btn.removeEventListener("click", three);
