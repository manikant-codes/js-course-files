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

const innerDiv = document.getElementById("inner-div");

const intervalID = setInterval(() => {
  console.log(innerDiv.style.left);
  if (Number(innerDiv.style.left.split("px")[0]) < 350) {
    innerDiv.style.left = Number(innerDiv.style.left.split("px")[0]) + 1 + "px";
    innerDiv.style.top = Number(innerDiv.style.top.split("px")[0]) + 1 + "px";
  } else {
    clearInterval(intervalID);
  }
}, 0);

// const timeoutID = setTimeout(() => {
//   clearTimeout(timeoutID);
// }, 1000);
