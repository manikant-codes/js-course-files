const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "indigo",
  "jackfruit",
];

const wordPara = document.getElementById("word");
const input = document.getElementById("input");

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * 10);
  return words[randomIndex];
}

let randomWord = getRandomWord();

function getPositionsToHide(lettersToHide, totalLetters) {
  const positionsToHide = [];

  for (let i = 0; i < lettersToHide; i++) {
    const randomIndex = Math.floor(Math.random() * totalLetters);
    if (positionsToHide.includes(randomIndex)) {
      i--;
      continue;
    } else {
      positionsToHide.push(randomIndex);
    }
  }

  return positionsToHide;
}

function getUnderscoreString(positionsToHide, randomWord, totalLetters) {
  let textString = "";

  for (let i = 0; i < totalLetters; i++) {
    if (positionsToHide.includes(i)) {
      textString += "_";
    } else {
      textString += randomWord[i];
    }
  }

  return textString;
}

function setupGame() {
  randomWord = getRandomWord();
  const totalLetters = randomWord.length;
  const lettersToHide = Math.floor(randomWord.length / 2);
  const positionsToHide = getPositionsToHide(lettersToHide, totalLetters);
  const textString = getUnderscoreString(
    positionsToHide,
    randomWord,
    totalLetters
  );
  wordPara.innerText = textString;
}

function check() {
  const userInput = input.value;
  if (userInput === randomWord) {
    alert("Correct!");
    setupGame();
  } else {
    alert("Incorrect!");
  }
}

setupGame();
