function getRandomNumber() {
  return Math.floor(Math.random() * 6 - 1 + 1) + 1;
}

const dice = document.getElementById("dice");
const dice2 = document.getElementById("dice2");

function rollTheDice() {
  const randomNumber = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  dice.src = randomNumber + ".svg";
  dice2.src = randomNumber2 + ".svg";
}
