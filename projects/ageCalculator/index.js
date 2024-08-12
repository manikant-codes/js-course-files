const dateInput = document.getElementById("dob");
const output = document.getElementById("output");

function getAge() {
  output.innerHTML =
    new Date().getFullYear() -
    new Date(dateInput.value).getFullYear() +
    " Years";
}
