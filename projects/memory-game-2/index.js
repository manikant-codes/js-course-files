let emojis = [
  "😀",
  "🚀",
  "🦄",
  "🌈",
  "🍦",
  "🐶",
  "🌍",
  "✨",
  "😀",
  "🚀",
  "🦄",
  "🌈",
  "🍦",
  "🐶",
  "🌍",
  "✨",
];

let numberOfTries = 0;

function shuffleEmojis() {
  emojis = emojis.sort(function (a, b) {
    return 0.5 - Math.random();
  });
}

function showTile(tile) {
  numberOfTries++;
  tile.classList.add("visible");

  const visibleTiles = Array.from(document.getElementsByClassName("visible"));

  setTimeout(function () {
    if (visibleTiles.length === 2) {
      let isSame =
        visibleTiles[0].children[1].innerText ===
        visibleTiles[1].children[1].innerText;

      if (isSame === false) {
        visibleTiles.forEach(function (value) {
          value.classList.remove("visible");
        });
      } else {
        visibleTiles.forEach(function (value) {
          value.classList.replace("visible", "correct");
        });
        const correctTiles = Array.from(
          document.getElementsByClassName("correct")
        );
        if (correctTiles.length === 16) {
          gameOver();
        }
      }
    }
  }, 500);
}

function renderGameTiles() {
  shuffleEmojis();
  const gameContainer = document.getElementById("gameContainer");
  let html = "";
  html = emojis
    .map(function (emoji, index) {
      return `
      <div class="gameTile">
        <div class="gameTileInner" onClick="showTile(this)">
            <div class="tileFront"></div>
            <div class="tileBack">
                ${emoji}
            </div>
        </div>
      </div>
      `;
    })
    .join("");
  gameContainer.innerHTML = html;
}

function gameOver() {
  const scoreContainer = document.getElementById("scoreContainer");
  scoreContainer.style.display = "flex";
  calculateScore();
}

function calculateScore() {
  let score = (numberOfTries * 100) / 16;
  score = score - 100;
  score = score / 10;
  score = Math.round(100 - score);
  document.getElementById("score").innerText = score;
}

function resetGame() {
  renderGameTiles();
  document.getElementById("scoreContainer").style.display = "none";
  numberOfTries = 0;
}

renderGameTiles();
