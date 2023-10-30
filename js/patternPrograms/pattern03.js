let pattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 2 * 5; j++) {
    if (i + j >= 5 + 1 && i >= j - 5 + 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
