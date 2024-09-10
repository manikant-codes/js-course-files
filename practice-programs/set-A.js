// 24. Write a JavaScript program to count the number of vowels in a given string.

function getNumberOfVowels(str) {
  return str.match(/[aeiou]/g).length;
}

console.log(getNumberOfVowels("w3schools"));
