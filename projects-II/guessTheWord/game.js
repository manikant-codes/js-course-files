const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
];

// Words array me se ek random word chahiye. - OK
// Jo random word mila hai usme decide karna hai ke kitne letters ke jagah pe underscore rakhna hai.
// Uske baad decide karna hai ke konse positions pe underscore rakhna hai, ye positions har baar radom rakhni hai.
// Uske baad underscore wali string banani hai aur use UI me dikhana hai.
// Uske baad user se input le ke check karna hai ke wo random word ke barabar hai ya nahi.

function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

function getRandomWord() {
  const randomIndex = getRandomIndex(words.length);
  const randomWord = words[randomIndex];
  return randomWord;
}

function getNumberOfUnderscore(randomWord) {
  const number = Math.floor(randomWord.length / 2);
  return number;
}

function getPositionsOfUnderscore(randomWord, numberOfUnderscore) {
  let positions = [];
  for (let i = 0; i < numberOfUnderscore; i++) {
    const randomIndex = getRandomIndex(randomWord.length);
    if (positions.includes(randomIndex)) {
      i--;
    } else {
      positions.push(randomIndex);
    }
  }
  return positions;
}

function getUnderscoreString(randomWord, positions) {
  let str = "";
  for (let i = 0; i < randomWord.length; i++) {
    if (positions.includes(i)) {
      str += "_";
    } else {
      str += randomWord[i];
    }
  }
  return str;
}

const randomWord = getRandomWord();
const numberOfUnderscore = getNumberOfUnderscore(randomWord);
const positions = getPositionsOfUnderscore(randomWord, numberOfUnderscore);
const underscoreStr = getUnderscoreString(randomWord, positions);

console.log(randomWord, numberOfUnderscore, positions, underscoreStr);
