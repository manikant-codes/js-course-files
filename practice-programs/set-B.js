// function getNextCharacterStr(str) {
//   const newStr = str.replaceAll(/[a-zA-Z]/g, (matched) => {
//     const nextCharCode = matched.charCodeAt() + 1;
//     if (nextCharCode === 91 || nextCharCode === 123) {
//       return matched;
//     }
//     const nextChar = String.fromCharCode(nextCharCode);
//     return nextChar;
//   });

//   console.log(newStr);
// }

// getNextCharacterStr("toz");

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

let index = 0;

const newStr = Object.entries(person)
  .toString()
  .replaceAll(/,/g, (match) => {
    index++;
    if (index % 2 === 0) {
      return ",\n";
    }
    return ":";
  });

console.log(newStr);
