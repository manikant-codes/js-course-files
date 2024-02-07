function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollTheDice() {
  const diceNumber = generateRandomNumber(1, 6);
  const diceFace = document.getElementById("dice-face");
  diceFace.src = `./dice/${diceNumber}.png`;
}
