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

function showTile(tile) {
  tile.classList.add("visible");
  const visibleTiles = Array.from(document.getElementsByClassName("visible"));
  // const visibleTilesContent = visibleTiles.map(function (value) {
  //   return value.children[1].innerText;
  // });

  setTimeout(function () {
    if (visibleTiles.length === 2) {
      let isSame =
        visibleTiles[0].children[1].innerText ===
        visibleTiles[1].children[1].innerText;

      console.log("isSame", isSame);

      if (isSame === false) {
        visibleTiles.forEach(function (value) {
          value.classList.remove("visible");
        });
      } else {
        visibleTiles.forEach(function (value) {
          value.classList.replace("visible", "correct");
        });
      }
    }
  }, 500);
}

function renderGameTiles() {
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

shuffleEmojis();
renderGameTiles();
