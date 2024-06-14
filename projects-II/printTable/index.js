const numInput = document.getElementById("num");
const tableDiv = document.getElementById("table-container");

function print() {
  debugger;
  const num = numInput.value;
  let html = "";
  let i = 1;

  while (i <= 10) {
    html += "<p>" + num + " x " + i + " = " + num * i + "</p>";
    i++;
  }

  tableDiv.innerHTML = html;
}

// <p>2 x 1 = 2</p>
// <p>2 x 2 = 4</p>
// <p>2 x 3 = 6</p>
// <p>2 x 4 = 8</p>
// <p>2 x 5 = 10</p>
