const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Date",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
];

function findIndexOf(str) {
  let index = -1;

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === str) {
      index = i;
      break;
    }
  }

  console.log(index);
}

findIndexOf("Date");
findIndexOf("Grape");
findIndexOf("Apple");
