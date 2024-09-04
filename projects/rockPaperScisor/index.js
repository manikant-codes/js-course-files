const outputPara = document.getElementById("output");
const yourScore = document.getElementById("your-socre");
const compScore = document.getElementById("comp-score");

let compWins = 0;
let wins = 0;

function getCompChoice() {
  return Math.floor(Math.random() * 3);
}

function play(userChoice) {
  const compChoice = getCompChoice();

  if (userChoice === 0) {
    if (compChoice === 0) {
      outputPara.innerHTML = "🤝 Draw";
    } else if (compChoice === 1) {
      outputPara.innerHTML = "🤖 Wins";
      compWins++;
      compScore.innerHTML = compWins;
    } else {
      outputPara.innerHTML = "🧑 Wins";
      wins++;
      yourScore.innerHTML = wins;
    }
  } else if (userChoice === 1) {
    if (compChoice === 0) {
      outputPara.innerHTML = "🧑 Wins";
      wins++;
      yourScore.innerHTML = wins;
    } else if (compChoice === 1) {
      outputPara.innerHTML = "🤝 Draw";
    } else {
      outputPara.innerHTML = "🤖 Wins";
      compWins++;
      compScore.innerHTML = compWins;
    }
  } else {
    if (compChoice === 0) {
      outputPara.innerHTML = "🤖 Wins";
      compWins++;
      compScore.innerHTML = compWins;
    } else if (compChoice === 1) {
      outputPara.innerHTML = "🧑 Wins";
      wins++;
      yourScore.innerHTML = wins;
    } else {
      outputPara.innerHTML = "🤝 Draw";
    }
  }
}
