const title = document.getElementById("text");

function rotate() {
  setInterval(function () {
    const text = title.innerHTML;
    console.log(text);
    title.innerHTML = text.slice(-1) + text.slice(0, text.length - 1);
  }, 100);
}

rotate();
