const parentDiv = document.querySelector("#parent");
const childDiv = document.querySelector("#child");

parentDiv.style.backgroundColor = "#b39ddb";
parentDiv.style.height = "400px";
parentDiv.style.width = "400px";
parentDiv.style.position = "relative";

childDiv.style.backgroundColor = "#4527a0";
childDiv.style.width = "50px";
childDiv.style.height = "50px";
childDiv.style.position = "absolute";
childDiv.style.left = "0px";
childDiv.style.top = "0px";

const interval = setInterval(() => {
  let left = Number(childDiv.style.left.split("px")[0]);
  let top = Number(childDiv.style.top.split("px")[0]);
  if (left === parentDiv.clientWidth - childDiv.clientWidth - 1) {
    clearInterval(interval);
  }
  childDiv.style.left = left + 1 + "px";
  childDiv.style.top = top + 1 + "px";
}, 5);
