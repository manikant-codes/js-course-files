const paragraphContainer = document.getElementById("container-para");
const myParagraph = document.getElementById("my-para");
let counter = 1;

function addParagraph() {
  // Hame ne yaha p (paragraph) element node banaya hai.
  const paragraph = document.createElement("p");
  paragraph.onclick = function () {
    this.remove();
  };

  // Hame ne yaha text node banaya hai.
  const text = document.createTextNode("Hello World " + counter);

  //   Yaha ham paragraph element node ke andar text node rakh rahe hai.
  paragraph.appendChild(text);

  paragraphContainer.appendChild(paragraph);
  paragraphContainer.insertBefore(paragraph, myParagraph);

  counter++;
}

function removeParagraph() {
  paragraphContainer.removeChild(myParagraph);
}

function replaceParagraph() {
  const button = document.createElement("button");
  button.innerText = "New Button";

  paragraphContainer.replaceChild(button, myParagraph);
}
