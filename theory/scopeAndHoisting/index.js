// hoisting: JS ka program chale us se pehle variables aur functions ko memory me jagah miljati hai. Isi process ko hoisting kehte hai.

// scope: JS ka code chale us se pehle ek Global Execution Context (Ek Jagah) banti hai jaha pe JS ka code chale ga. Ya code 2 part me chalta hai: 1. Memory Allocation, 2. Code Execution.

// Memory allocation wale part me us Execution Context (Jagah) ke sabhi variables aur functions ko memory me jagh milti hai. Ye jagah jaha unhe rakha jaa raha hai us jagah ko Scope kehte hai.

// Har Execution Context ka apna scope hota hai.

// Code execution wale part me line by line code chalta hai.

debugger;

let a = 5;
let b = 10;

function add() {
  let result = a + b;
  console.log(result);
}

add();
