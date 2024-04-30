// console.log(document.getElementById("my-para").innerHTML);
// document.getElementById("my-para").innerHTML = "Hello JavaScript";

// document.getElementsByTagName("p")[0].innerHTML = "Hello JavaScript";
// document.getElementsByTagName("p")[1].innerHTML = "Hello JavaScript";
// document.getElementsByTagName("p")[2].innerHTML = "Hello JavaScript";
// document.getElementsByTagName("p")[3].innerHTML = "Hello JavaScript";

// const paragraphs = document.getElementsByTagName("p");
// const paras = document.getElementsByClassName("para");

// let index = 1;

// for (const p of paragraphs) {
//   p.innerHTML = "Hello JS";
//   // p.className = "para-" + index;
//   p.onclick = function () {
//     alert(`You clicked on the paragraph`);
//   };
//   // p.setAttribute("onclick", "alert('Hello!')");
//   index++;
// }

// for (const p of paras) {
//   p.innerHTML = "Hello World!";
//   p.style.backgroundColor = "purple";
//   p.style.color = "white";
//   p.style.padding = "8px";
// }

// const paras = document.querySelectorAll("p:last-child");

// console.log("paras", paras);

// document.write("Hello");

// const innerDiv = document.getElementById("inner-div");

// const intervalID = setInterval(() => {
//   console.log(innerDiv.style.left);
//   if (Number(innerDiv.style.left.split("px")[0]) < 350) {
//     innerDiv.style.left = Number(innerDiv.style.left.split("px")[0]) + 1 + "px";
//     innerDiv.style.top = Number(innerDiv.style.top.split("px")[0]) + 1 + "px";
//   } else {
//     clearInterval(intervalID);
//   }
// }, 0);

// const timeoutID = setTimeout(() => {
//   clearTimeout(timeoutID);
// }, 1000);

// const myDiv = document.getElementById("events-div");

// myDiv.onclick = function () {
//   handleClick();
// };

// // myDiv.onclick = handleClick;

// function handleClick() {
//   myDiv.innerHTML = "Clicked!";
// }

// document.onload = function () {
//   console.log("Document Loaded!");
// };

// window.onload = () => {
//   console.log("Loaded!");
// };
// const nameInput = document.getElementById("name");

// nameInput.oninput = function () {
//   capitalize();
// };

// function capitalize() {
//   nameInput.value = nameInput.value.toUpperCase();
// }

// const myDiv = document.getElementById("events-div");

// function handleMouseOver() {
//   myDiv.innerHTML = "Hovered!";
// }

// function handleMouseOut() {
//   myDiv.innerHTML = "Hello!";
// }

// function handleMouseDown() {
//   myDiv.innerHTML = "Mouse Down!";
// }

// function handleMouseUp() {
//   myDiv.innerHTML = "Mouse Up!";
// }

// const btn = document.getElementById("btn");

// btn.onclick = function () {
//   console.log("Hello!");
// };

// btn.addEventListener("click", function () {
//   console.log("Hello!");
// });

const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

// outer.addEventListener(
//   "click",
//   function () {
//     console.log("Outer!");
//   },
//   true
// );

// inner.onclick = function () {
//   console.log("original onclick listener");
//   inner.onclick = null;
// };

// function handleClick() {
//   console.log("Clicked!");
//   inner.removeEventListener("click", handleClick, true);
// }

// inner.addEventListener("click", handleClick, true);

// console.log("inner.onclick", inner.onclick);

// function handleClick() {
//   console.log("Hello!");
// }

// handleClick();

// console.log(document.getElementById("child-1").parentNode);
// document.getElementById("child-1").parentNode.style.backgroundColor = "red";

// console.log(document.getElementById("parent").childNodes);
// console.log(document.getElementById("parent").children);
// Array.from(document.getElementById("parent").children).forEach((el) => {
//   el.style.backgroundColor = "red";
// });

// console.log(document.getElementById("parent").firstChild);
// console.log(document.getElementById("parent").firstElementChild);

// console.log(document.getElementById("parent").lastChild);
// console.log(document.getElementById("parent").lastElementChild);

// console.log(document.getElementById("child-1").nextSibling);
// console.log(document.getElementById("child-1").nextElementSibling);

// console.log(document.getElementById("child-2").previousSibling);
// console.log(document.getElementById("child-2").previousElementSibling);

// console.log(document.getElementById("parent").childNodes[1].nodeType);
// console.log(document.nodeType);
// console.log(document.doctype.nodeType);

const btn = document.getElementById("btn");

btn.onclick = function () {
  const parentDiv = document.getElementById("parent");
  const num = parentDiv.children.length + 1;

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = "New input";

  const newDiv = document.createElement("div");
  newDiv.classList.add("child");
  newDiv.id = `child-${num}`;
  newDiv.onclick = function () {
    // if (newDiv.style.backgroundColor === "red") {
    //   newDiv.style.backgroundColor = "darkgoldenrod";
    // } else {
    //   newDiv.style.backgroundColor = "red";
    // }
    newDiv.replaceWith(newInput);
  };
  const newTextNode = document.createTextNode(num);

  newDiv.appendChild(newTextNode);

  parentDiv.appendChild(newDiv);
};
