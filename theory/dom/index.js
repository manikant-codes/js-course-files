// --------------------------------------------------
// getElement/s
// --------------------------------------------------
// const byId = document.getElementById("my-para");
// const byClassName = document.getElementsByClassName("para");
// const byTagName = document.getElementsByTagName("p");

// --------------------------------------------------
// querySelector/querySelectorAll
// --------------------------------------------------
// const byId = document.querySelector("#my-para");
// const byClassName = document.querySelectorAll(".para");
// const byTagName = document.querySelectorAll("p");
// const byElementClassName = document.querySelectorAll("p.para");
// const byFirstElement = document.querySelectorAll("p:first-child");

// console.log("byId", byId);
// console.log("byClassName", byClassName);
// console.log("byTagName", byTagName);
// console.log("byFirstElement", byFirstElement);

// --------------------------------------------------
// innerText/innerHTML
// --------------------------------------------------
// byId.innerText = "<span>New Content</span>";
// byId.innerHTML = "<span style='color: red'>New Content</span>";

// --------------------------------------------------
// Select/Change Attributes
// --------------------------------------------------
// byId.className = "red";
// byId.id = "my-new-para";
// byId.style.color = "green";
// OR
// byId.setAttribute("class", "red");
// byId.setAttribute("id", "my-new-para");
// byId.setAttribute("style", "color: green");

// --------------------------------------------------
// Create Element
// --------------------------------------------------
const paragraphNode = document.createElement("p");
// para.innerText = "Hello World!";
// para.innerHTML = "<span class='red'>Hello World!</span>";
const paragraphTextNode = document.createTextNode("Hello World!");
paragraphNode.appendChild(paragraphTextNode);
paragraphNode.className = "red";

const buttonNode = document.createElement("button");
const buttonTextNode = document.createTextNode("Add Paragraph");
buttonNode.appendChild(buttonTextNode);
buttonNode.onclick = function () {
  const paragraphNode = document.createElement("p");
  const paragraphTextNode = document.createTextNode("Hello World!");
  paragraphNode.appendChild(paragraphTextNode);
  document.body.appendChild(paragraphNode);
};

document.body.appendChild(paragraphNode);
document.body.appendChild(buttonNode);

console.log(paragraphNode.innerHTML);
