// const words = [
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "elderberry",
//   "fig",
//   "grape",
//   "honeydew",
//   "kiwi",
//   "lemon",
// ];

// const wordPara = document.getElementById("word");

// 1. Select a random word from the array.
// 2. Get the number and positions of underscore in the word and get the underscore string.
// 3. Print the underscore string.
// 4. Get the user input and check if it is same as the random word.
// 5. If it is show correct and reset the game, else show incorrect and don't reset the game.

// function getRandomWord() {
//   const randomIndex = Math.floor(Math.random() * words.length);
//   return words[randomIndex];
// }

// function getUnderscoreString(randomWord) {
//   const numberOfUnderscores = Math.floor(randomWord.length / 2);

//   const positions = [];

//   for (let i = 0; i < numberOfUnderscores; i++) {
//     const randomIndex = Math.floor(Math.random() * randomWord.length);
//     if (positions.includes(randomIndex)) {
//       i--;
//     } else {
//       positions.push(randomIndex);
//     }
//   }

//   let underscoreString = "";

//   for (let i = 0; i < randomWord.length; i++) {
//     if (positions.includes(i)) {
//       underscoreString += "_";
//     } else {
//       underscoreString += randomWord[i];
//     }
//   }

//   return underscoreString;
// }

// const randomWord = getRandomWord();
// const underscoreString = getUnderscoreString(randomWord);
// wordPara.innerText = underscoreString;
