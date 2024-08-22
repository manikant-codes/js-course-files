// function isString(str) {
//     if (typeof str === "string") {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isString("abc");
// isString({a: 10});

// function isEmpty(str) {
//     if (str.length === 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isEmpty("");
// isEmpty("ram");

// function getWords(str) {
//   console.log(str.split(" "));
// }

// getWords("ram ram");
// getWords("manikant jha");

// function getNCharacters(str, num) {
//   if (num <= str.length) {
//     console.log(str.substring(0, num));
//   } else {
//     console.log("Not enough characters in string.");
//   }
// }

// getNCharacters("ram ram", 7);

// function getAbbriviatedString(str) {
//   const splittedStr = str.split(" ");
//   const fName = splittedStr[0];
//   const lName = splittedStr[1].substring(0, 1);

//   console.log(fName + " " + lName + ".");
// }

// getAbbriviatedString("Manikant Jha");

// function parameterizeStr(str) {
//   console.log(str.toLowerCase().replaceAll(" ", "-"));
// }

// parameterizeStr("Ram Ram");
// parameterizeStr("Manikant Jha");

// function protectEmail(email) {
//   const splittedEmail = email.split("@");
//   const userName = splittedEmail[0];
//   const domain = splittedEmail[1];
//   const userNameSliced = userName.slice(0, userName.length / 2);
//   const userNamePadded = userNameSliced.padEnd(userName.length, "*");
//   console.log(userNamePadded + "@" + domain);
// }

// protectEmail("robin_singh@example.com");
// protectEmail("manikant@example.com");

// function capitalizeFirstWord(str) {
//   const firstChar = str.slice(0, 1);
//   const remainingChars = str.slice(1);
//   console.log(firstChar.toUpperCase() + remainingChars);
// }

// capitalizeFirstWord("hare ram");
// capitalizeFirstWord("hare krishna");

// function capitalizeEachWord(str) {
//   // const words = str.split(" ");
//   // let temp = [];
//   // for (const word of words) {
//   //   const firstChar = word.slice(0, 1);
//   //   const remainingChars = word.slice(1);
//   //   temp.push(firstChar.toUpperCase() + remainingChars);
//   // }
//   // console.log(temp.join(" "));

//   const newStr = str.replace(/\w+\S/g, function (text) {
//     const firstChar = text.slice(0, 1);
//     const remainingChars = text.slice(1);
//     return firstChar.toUpperCase() + remainingChars;
//   });

//   console.log(newStr);
// }

// capitalizeEachWord("hare ram");
// capitalizeEachWord("hare krishna");

// function swapCase(str) {
//   const newStr = str.replace(/[A-Z,a-z]/g, function (text) {
//     if (text.charCodeAt() <= 90) {
//       return text.toLowerCase();
//     } else {
//       return text.toUpperCase();
//     }
//   });
//   console.log(newStr);
// }

// swapCase("RaM0");
// swapCase("AaM");

function unCamelize(str, join) {
  const newStr = str.replace(/[A-Z]/g, function (match) {
    return join + match.toLowerCase();
  });

  console.log(newStr);
}

unCamelize("ramRam", "-");
