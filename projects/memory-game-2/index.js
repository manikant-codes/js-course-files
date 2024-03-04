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

function shuffleEmojis() {
  emojis = emojis.sort(function (a, b) {
    return 0.5 - Math.random();
  });
}

function renderGameTiles() {
  const gameContainer = document.getElementById("gameContainer");
  let html = "";
  html = emojis
    .map(function (emoji, index) {
      return `<div class="gameTile">
        <div class="gameTileInner">
            <div class="tileFront"></div>
            <div class="tileBack">
                ${emoji}
            </div>
        </div>
      </div>`;
    })
    .join("");
  gameContainer.innerHTML = html;
}

shuffleEmojis();
renderGameTiles();
