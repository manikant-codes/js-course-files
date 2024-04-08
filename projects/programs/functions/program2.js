function getReversedStr(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");

  if (str.length === 0) {
    return "Not Palindrome!";
  }

  if (str.length === 1) {
    return "Palindrome!";
  }

  const reversedStr = getReversedStr(str);
  if (str === reversedStr) {
    return "Is Palindrome!";
  }
  return "Not Palindrome!";
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("101"));
