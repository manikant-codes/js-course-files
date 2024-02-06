function someFunction() {
  console.log("Hello");
}

// Tarika 1
// <button id="btn" onclick="someFunction()">Click Me</button>
// Is case me aap ko exactly wo code likhna hai jo aap chalana chahte hoo.
// Is case me aap function ke anda ka code dete hoo.

// Tarika 2
document.getElementById("btn").onclick = someFunction;
// Is case me aap pure ka pura function de de te hoo, isliye aap ko use call karne ki jarurat nahi hai, JS use call karlega.

// console.log("onclick", document.getElementById("btn").onclick);

// Tarika 3
document.getElementById("btn").addEventListener("click", function () {
  console.log("Hi");
});

console.log("onclick", document.getElementById("btn").onclick);

window.onunload = alert("Hello");
