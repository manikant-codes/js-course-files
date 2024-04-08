// function getReversedNumber(num) {
//   const numStr = num.toString();
//   const reversedStr = numStr.split("").reverse().join("");
//   Number(reversedStr);
// }

function getReversedNumber(num) {
  let reversedNum = 0;

  while (num !== 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversedNum;
}

// function isPalindrome(num) {
//   const reversed = getReversedNumber(num);

//   if (num === reversed) {
//     return "Palindrome!";
//   }

//   return "Not Palindrome!";
// }

console.log(getReversedNumber(123));
console.log(getReversedNumber(456));
