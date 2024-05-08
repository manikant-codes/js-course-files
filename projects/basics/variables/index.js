var outputParagraph = document.getElementById("output");
var addBtn = document.getElementById("add");
var minusBtn = document.getElementById("minus");

function add() {
  var x = 10;
  var y = 23;
  var result = x + y;
  outputParagraph.innerText = "Output is " + result;
}

function minus() {
  var x = 10;
  var y = 23;
  var result = x - y;
  outputParagraph.innerText = "Output is " + result;
}
