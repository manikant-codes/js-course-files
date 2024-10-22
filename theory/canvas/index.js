const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";

// ctx.fillRect(10, 10, 200, 100);

// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
