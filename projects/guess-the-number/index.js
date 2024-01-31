let randomNumber = getRandomNumber(1, 20);
let numberOfAttempts = 0;
let score = 0;

function checkTheGuess() {
  const numberInput = document.getElementById("number-input");
  const outputPara = document.getElementById("output");
  const attemptsPara = document.getElementById("attempts");
  const scorePara = document.getElementById("score");
  const resetBtn = document.getElementById("resetBtn");

  const guessedNumber = Number(numberInput.value);

  const tooBig = randomNumber + 5;
  const stillBig = randomNumber + 3;
  const tooSmall = randomNumber - 5;
  const stillSmall = randomNumber - 3;

  numberOfAttempts++;

  let message = "";

  if (guessedNumber > tooBig) {
    message = "🥴 TOO BIG! 🥴";
  } else if (guessedNumber > stillBig) {
    message = "🥴 STILL BIG! 🥴";
  } else if (guessedNumber > randomNumber) {
    message = "🥴 BIG! BUT CLOSE! 🥴";
  } else if (guessedNumber < tooSmall) {
    message = "🥴 TOO SMALL! 🥴";
  } else if (guessedNumber < stillSmall) {
    message = "🥴 STILL SMALL! 🥴";
  } else if (guessedNumber < randomNumber) {
    message = "🥴 SMALL! BUT CLOSE! 🥴";
  } else {
    message = "🎉 YOU'VE GUESSED IT RIGHT! 🎉";
    score = 20 - numberOfAttempts;
    scorePara.innerHTML = "Score: " + score;
    resetBtn.style.display = "block";
  }

  attemptsPara.innerHTML = "Attempts: " + numberOfAttempts;
  outputPara.style.display = "block";
  outputPara.innerHTML = message;
}

function reset() {
  const numberInput = document.getElementById("numberInput");
  const outputPara = document.getElementById("output");
  const attemptsPara = document.getElementById("attempts");
  const scorePara = document.getElementById("score");
  const resetBtn = document.getElementById("resetBtn");

  randomNumber = getRandomNumber(1, 20);
  numberOfAttempts = 0;
  score = 0;

  numberInput.value = "";
  outputPara.innerHTML = "";
  outputPara.style.display = "none";
  attemptsPara.innerHTML = "Attempts: " + numberOfAttempts;
  scorePara.innerHTML = "Score: " + score;
  resetBtn.style.display = "none";
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
