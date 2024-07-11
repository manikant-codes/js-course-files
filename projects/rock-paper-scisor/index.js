// Winning conditions

// rock - rock - draw
// rock - paper - computer
// rock - scisor - you

// paper - rock - you
// paper - paper - draw
// paper - scisor - computer

// scisor - rock - computer
// scisor - paper - you
// scisor - scisor - draw

// 0 - rock
// 1 - paper
// 2 - scisor

function getComputerInput() {
  return Math.floor(Math.random() * 3);
}

const outputPara = document.getElementById("output");
const yourScoreSpan = document.getElementById("your-score");
const computerScoreSpan = document.getElementById("computer-score");

let yourScore = 0;
let computerScore = 0;

function play(userInput) {
  const computerInput = getComputerInput();

  let result = "";

  if (userInput === 0) {
    if (computerInput === 0) {
      result = "Draw";
    } else if (computerInput === 1) {
      result = "Computer Wins";
      computerScore++;
    } else {
      result = "You Win";
      yourScore++;
    }
  } else if (userInput === 1) {
    if (computerInput === 0) {
      result = "You Win";
      yourScore++;
    } else if (computerInput === 1) {
      result = "Draw";
    } else {
      result = "Computer Wins";
      computerScore++;
    }
  } else {
    if (computerInput === 0) {
      result = "Computer Wins";
      computerScore++;
    } else if (computerInput === 1) {
      result = "You Win";
      yourScore++;
    } else {
      result = "Draw";
    }
  }

  let victoryEmoji = "";

  if (result.includes("Computer")) {
    victoryEmoji = "🤖";
  } else if (result.includes("You")) {
    victoryEmoji = "🎉";
  } else {
    victoryEmoji = "😬";
  }

  outputPara.innerHTML = victoryEmoji + " " + result + " " + victoryEmoji;
  yourScoreSpan.innerText = "You: " + yourScore;
  computerScoreSpan.innerText = "Computer: " + computerScore;
}
