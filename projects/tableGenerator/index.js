const numberInput = document.getElementById("number");
const tableBody = document.getElementById("table-body");
const table = document.getElementById("table");
const noNumberPara = document.getElementById("no-number");

table.style.display = "none";

function getTable() {
  table.style.display = "table";
  const number = Number(numberInput.value);
  noNumberPara.innerHTML = `Table of ${number}`;
  let str = "";
  for (let count = 1; count <= 10; count++) {
    str =
      str +
      `
    <tr>
        <td>${number}</td> 
        <td>x</td> 
        <td>${count}</td> 
        <td>=</td> 
        <td>${number * count}</td> 
    </tr>`;
  }
  tableBody.innerHTML = str;
}
