function generateTable() {
  const input = document.getElementById("number");
  const table = document.getElementById("tableContainer");
  const number = Number(input.value);

  let html = "";

  for (let count = 1; count <= 10; count++) {
    html += `<p>${number} x ${count} = ${number * count}</p>`;
  }

  table.innerHTML = html;
}
