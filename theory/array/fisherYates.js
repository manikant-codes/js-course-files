const numbers = [2, 5, 3, 4, 6, 1, 8, 7, 9, 10];

function fisherYates(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = temp;
  }
}

fisherYates(numbers);

console.log(numbers);
