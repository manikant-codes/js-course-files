const gameGrid = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function handleReveal(id) {
  const card = document.getElementById(id);
  if (!card.classList.contains("visible")) {
    card.classList.add("visible");
  } else {
    card.classList.remove("visible");
  }

  const visibleCards =
    Array.from(document.getElementsByClassName("visible")) || [];
  const visibleCardsContent = visibleCards.map((item) =>
    item.children[1].innerHTML.trim()
  );

  setTimeout(() => {
    console.log(visibleCardsContent);
    if (visibleCards.length >= 2) {
      if (visibleCardsContent[0] !== visibleCardsContent[1]) {
        visibleCards[0].classList.remove("visible");
        visibleCards[1].classList.remove("visible");
      } else {
        visibleCards[0].classList.replace("visible", "correct");
        visibleCards[1].classList.replace("visible", "correct");
      }
    }
  }, 600);
}

function renderGame() {
  const shuffledGameGrid = shuffle(gameGrid);

  console.log(shuffledGameGrid);

  const memoryGameContainer = document.getElementById("memoryGameContainer");

  memoryGameContainer.innerHTML = shuffledGameGrid
    .map(
      (item, index) =>
        `
        <div class="flip-card">
          <div id="card-${index}" class="flip-card-inner" onclick="handleReveal('card-${index}')">
            <div class="flip-card-front">
            </div>
            <div class="flip-card-back">
              ${item}
            </div>
          </div>
        </div>`
    )
    .join("");
}

renderGame();
