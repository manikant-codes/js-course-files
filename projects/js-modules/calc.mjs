// Named Export

// export function add(n1, n2) {
//   return n1 + n2;
// }

// export function subtract(n1, n2) {
//   return n1 - n2;
// }

// export function multiply(n1, n2) {
//   return n1 * n2;
// }

// export function divide(n1, n2) {
//   return n1 / n2;
// }

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

// Named Export
export { add, subtract, multiply, divide };

const value = 10;
// Default Export
export default value;

const obj = {
  employees: [
    { firstName: "John", lastName: "function () {}" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};

const jsonData =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const data = JSON.parse(jsonData);
const json = JSON.stringify(obj);

console.log("data", data.employees[0].firstName);
console.log("json", json);
