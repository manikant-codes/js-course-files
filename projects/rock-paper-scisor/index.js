let score = 0;
let computerScore = 0;

function rockPaperScisor(userChoice) {
  const computerChoice = getComputerChoice();
  const outputPara = document.getElementById("output");
  const scorePara = document.getElementById("score");
  const computerScorePara = document.getElementById("computerScore");

  console.log(userChoice, computerChoice);

  let message;

  if (userChoice === computerChoice) {
    message = "DRAW";
  } else if (userChoice === 0) {
    if (computerChoice === 1) {
      message = "🤖 COMPUTER WON 🤖";
      ++computerScore;
    } else {
      message = "🏆 VICTORY 🏆";
      ++score;
    }
  } else if (userChoice === 1) {
    if (computerChoice === 0) {
      message = "🏆 VICTORY 🏆";
      ++score;
    } else {
      message = "🤖 COMPUTER WON 🤖";
      ++computerScore;
    }
  } else {
    if (computerChoice === 0) {
      message = "🤖 COMPUTER WON 🤖";
      ++computerScore;
    } else {
      message = "🏆 VICTORY 🏆";
      ++score;
    }
  }

  outputPara.style.display = "block";
  outputPara.innerHTML = message;
  scorePara.innerHTML = "You: " + score;
  computerScorePara.innerHTML = "Computer: " + computerScore;
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

// 0 - 0 , 1 - 1, 2 - 2 (Draw Cases)
// 0 - 0 (Draw), 0 - 1 (1 Wins), 0 - 2 (0 Wins)
// 1 - 0 (1 Wins), 1 - 1 (Draw), 1 - 2 (2 Wins)
// 2 - 0 (0 Wins), 2 - 1 (2 Wins), 2 - 2 (Draw)
