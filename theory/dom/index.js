const byId = document.getElementById("my-para");
const byTagName = document.getElementsByTagName("p");
const byClassName = document.getElementsByClassName("para");

// byId.innerText = "<span>New Content</span>";
// byId.innerHTML = "<span style='color: red'>New Content</span>";

// byId.className = "red";
// byId.id = "my-new-para";
// byId.style.color = "green";
// OR
// byId.setAttribute("class", "red");
// byId.setAttribute("id", "my-new-para");
// byId.setAttribute("style", "color: green");

console.log("myPara", byId.innerText);
console.log("allParas", byTagName);
console.log("classParas", byClassName);
