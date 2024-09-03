const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

function generateRandomNumber() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function roll() {
  const dice1Num = generateRandomNumber();
  const dice2Num = generateRandomNumber();

  dice1.src = `./${dice1Num}.svg`;
  dice2.src = `./${dice2Num}.svg`;
}
