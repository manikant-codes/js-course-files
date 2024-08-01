const inputElement = document.getElementById("number-input");
const card = document.getElementById("card-table");
const ones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printTable() {
  const userNumber = Number(inputElement.value);
  const tablesArray = ones.map(function (value, index, array) {
    return (
      "<p>" +
      "<span>" +
      userNumber +
      "</span>" +
      "<span>" +
      " x " +
      "</span>" +
      "<span>" +
      value +
      "</span>" +
      "<span>" +
      " = " +
      "</span>" +
      "<span>" +
      value * userNumber +
      "</span>" +
      "</p>"
    );
  });
  card.innerHTML = tablesArray.join("");
}
