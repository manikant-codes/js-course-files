// Jo text mujhe dikhana hai wo mai is variable me rakh raha hun.
let text = `Lorem ipsum dolor sit amet
consectetur adipisicing elit. Reprehenderit assumenda incidunt quo
aliquid corrupti earum accusantium officiis inventore, rerum
provident nihil officia voluptas velit similique facilis, optio
atque asperiores? Ea.`;

// Jis paragraph me ye text dikhana hai uska reference is variable me rakhraha hun.
const textPara = document.getElementById("text-para");

// Find wale input ka reference isme rakh rahe hai. Kyu ke hame user ne usme kya likha hai wo chahiye.
const inputFind = document.getElementById("input-find");

const inputReplace = document.getElementById("input-replace");

// Is function ka kaam hai jo bhi text textToShow me derahe hai wo text textPara me dikhana hai.
function showText(textToShow) {
  textPara.innerHTML = textToShow;
}

// Ye function jab user find wale me input me kuch likh raha hi tab chalarahe hai.
function find() {
  // User ne input me jo likha hai wo nikal ke is variable me rakh rahe hain.
  const toFind = inputFind.value;
  // User ne jo bhi text likha hai input-find me usko ham span tag ke andar rakh ke replace kar rahe hai.
  // lorem -> <span class="found-text">lorem</span>
  const newText = text.replaceAll(
    toFind,
    `<span class="found-text">${toFind}</span>`
  );

  // newText ham dikha rahe hain.
  showText(newText);
}

function replace() {
  // Jo text input-find me likha hai wo isme rakha hai.
  const toFind = inputFind.value;
  // Jo text input-replace me likha hai wo isme rakha hai.
  const toReplaceWith = inputReplace.value;

  // text variable me se find aur replace karke naya text wapas text variable makh rahe hain.
  text = text.replaceAll(toFind, toReplaceWith);

  // Fir wo text textPara me dikha rahe hain.
  showText(text);
}

function copy() {
  navigator.clipboard.writeText(text);
}

showText(text);
