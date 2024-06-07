// rock - rock draw
// rock - paper computer wins
// rock - scisor you win

// paper - rock you win
// paper - paper draw
// paper - scisor computer wins

// scisor - rock computer wins
// scisor - paper you win
// scisor - scisor draw

const outputPara = document.getElementById("output-para");

function generateSelection() {
  return Math.floor(Math.random() * 3) + 1;
}

function getResult(selection) {
  const computerSelection = generateSelection();

  if (selection === 1) {
    if (computerSelection === 1) {
      // draw
      outputPara.style.display = "block";
      outputPara.innerText = "draw";
    } else if (computerSelection === 2) {
      // computer wins
      outputPara.innerText = "computer wins";
    } else {
      // you win
      outputPara.innerText = "you win";
    }
  } else if (selection === 2) {
    if (computerSelection === 1) {
      // you win
      outputPara.innerText = "you win";
    } else if (computerSelection === 2) {
      // draw
      outputPara.innerText = "draw";
    } else {
      // computer wins
      outputPara.innerText = "computer wins";
    }
  } else {
    if (computerSelection === 1) {
      // computer wins
      outputPara.innerText = "computer wins";
    } else if (computerSelection === 2) {
      // you win
      outputPara.innerText = "you win";
    } else {
      // draw
      outputPara.innerText = "draw";
    }
  }
}
