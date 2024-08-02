let text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptates, cupiditate, quos iure atque eos libero quis pariatur, quo
          provident nulla ipsam ipsa? Architecto, fugiat! Maxime aliquid cumque
          veniam quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Rerum voluptates, cupiditate, quos iure atque eos libero quis
          pariatur, quo provident nulla ipsam ipsa? Architecto, fugiat! Maxime
          aliquid cumque veniam quam.`;

const para = document.getElementById("text");
const inputFind = document.getElementById("input-find");
const inputReplace = document.getElementById("input-replace");
para.innerHTML = text;

function clear() {
  text = text.replaceAll("<span class='found-word'>", "");
  text = text.replaceAll("</span>", "");
  para.innerHTML = text;
  inputFind.value = "";
  inputReplace.value = "";
}

function find() {
  const toFind = inputFind.value;
  if (!inputFind.value) {
    clear();
  }
  modifiedText = text.replaceAll(
    toFind,
    "<span class='found-word'>" + toFind + "</span>"
  );
  para.innerHTML = modifiedText;
}

function replace() {
  const toFind = inputFind.value;
  const replaceWith = inputReplace.value;
  text = text.replaceAll(
    toFind,
    "<span class='found-word'>" + replaceWith + "</span>"
  );
  para.innerHTML = text;
  setTimeout(clear, 1000);
}
