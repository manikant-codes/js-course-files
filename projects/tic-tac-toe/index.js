const gameBoard = document.getElementById("game-board");
const outputPara = document.getElementById("output");
const resetBtn = document.getElementById("reset-btn");

let player = "x";
let winner = "";

function checkWinner() {
  const contents = getAllGameTilesContent();

  if (contents[0] === contents[1] && contents[0] === contents[2]) {
    winner = contents[0];
    return winner;
  } else if (contents[3] === contents[4] && contents[3] === contents[5]) {
    winner = contents[3];
    return winner;
  } else if (contents[6] === contents[7] && contents[6] === contents[8]) {
    winner = contents[6];
    return winner;
  } else if (contents[0] === contents[3] && contents[0] === contents[6]) {
    winner = contents[0];
    return winner;
  } else if (contents[1] === contents[4] && contents[1] === contents[7]) {
    winner = contents[1];
    return winner;
  } else if (contents[2] === contents[5] && contents[2] === contents[8]) {
    winner = contents[2];
    return winner;
  } else if (contents[0] === contents[4] && contents[0] === contents[8]) {
    winner = contents[0];
    return winner;
  } else if (contents[2] === contents[4] && contents[2] === contents[6]) {
    winner = contents[2];
    return winner;
  } else {
    return winner;
  }
}

function getAllGameTilesContent() {
  return Array.from(gameBoard.children).map((div) => {
    return div.innerText;
  });
}

function handleTileClick() {
  if (!this.innerText && !winner) {
    this.innerText = player;
    if (player === "x") {
      player = "o";
    } else {
      player = "x";
    }
    winner = checkWinner();
    if (winner) {
      outputPara.innerText = "Winner is " + winner;
      outputPara.style.display = "block";
      resetBtn.style.display = "block";
    }
  }
}

function generateTiles() {
  for (let i = 0; i < 9; i++) {
    const gameTile = document.createElement("div");
    gameTile.classList.add("game-tile");
    gameTile.onclick = handleTileClick;
    gameBoard.appendChild(gameTile);
  }
}

function handleReset() {
  gameBoard.innerHTML = "";
  generateTiles();
  player = winner;
  winner = "";
  outputPara.style.display = "none";
  resetBtn.style.display = "none";
}

generateTiles();
