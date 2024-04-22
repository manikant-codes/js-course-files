// console.log(document.getElementById("my-para").innerHTML);
// document.getElementById("my-para").innerHTML = "Hello JavaScript";

// document.getElementsByTagName("p")[0].innerHTML = "Hello JavaScript";
// document.getElementsByTagName("p")[1].innerHTML = "Hello JavaScript";
// document.getElementsByTagName("p")[2].innerHTML = "Hello JavaScript";
// document.getElementsByTagName("p")[3].innerHTML = "Hello JavaScript";

const paragraphs = document.getElementsByTagName("p");
const paras = document.getElementsByClassName("para");

let index = 1;

for (const p of paragraphs) {
  p.innerHTML = "Hello JS";
  // p.className = "para-" + index;
  p.onclick = function () {
    alert(`You clicked on the paragraph`);
  };
  // p.setAttribute("onclick", "alert('Hello!')");
  index++;
}

// for (const p of paras) {
//   p.innerHTML = "Hello World!";
//   p.style.backgroundColor = "purple";
//   p.style.color = "white";
//   p.style.padding = "8px";
// }
