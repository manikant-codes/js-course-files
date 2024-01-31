const PI = 3.14;

function area(radius) {
  return PI * radius * radius;
}
function circumference(radius) {
  return 2 * PI * radius;
}
function diameter(radius) {
  return 2 * radius;
}

function calculate() {
  // Document me se wo element le ke aa rahe hai jiski id calculation ho.
  const selectElement = document.getElementById("calculation");
  // Usme se selected value access/nikaal kar rahe hai.
  const calculation = selectElement.value;
  // Document me se wo element le ke aa rahe hai jiski id radisInput ho.
  const radiusInput = document.getElementById("radiusInput");
  // Usme se inserted value access/nikaal kar rahe hai.
  const radiusInString = radiusInput.value;
  // Radius ko number me convert kar rahe hai, Number() function ke help se.
  const radiusInNumber = Number(radiusInString);
  // Document me se wo element le ke aa rahe hai jiski id output ho.
  const outputPara = document.getElementById("output");

  let result;

  if (calculation === "area") {
    // agar calculaton barabar "area" hoo to:
    result = area(radiusInNumber);
  } else if (calculation === "diameter") {
    // warna agar calculaton barabar "diameter" hoo to:
    result = diameter(radiusInNumber);
  } else {
    // warna:
    result = circumference(radiusInNumber);
  }

  // outputPara ke andar ke HTML ko change kar rahe hain/
  outputPara.innerHTML = calculation + " " + result;
}
