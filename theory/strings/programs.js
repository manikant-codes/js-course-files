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

function protectEmail(email) {
  const splittedEmail = email.split("@");
  const userName = splittedEmail[0];
  const domain = splittedEmail[1];
  const userNameSliced = userName.slice(0, userName.length / 2);
  const userNamePadded = userNameSliced.padEnd(userName.length, "*");
  console.log(userNamePadded + "@" + domain);
}

protectEmail("robin_singh@example.com");
protectEmail("manikant@example.com");
