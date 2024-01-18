let paraCount = 0;
function addTask() {
  const tasksList = document.getElementById("tasksList");

  paraCount++;

  const para = document.createElement("p");
  const paraText = document.createTextNode("Paragraph " + paraCount);
  para.appendChild(paraText);

  const button = document.createElement("button");
  const buttonText = document.createTextNode("x");
  button.appendChild(buttonText);

  const div = document.createElement("div");
  div.appendChild(para);
  div.appendChild(button);

  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.gap = "16px";
  div.style.justifyItems = "space-between";

  button.onclick = function () {
    tasksList.removeChild(div);
  };

  tasksList.appendChild(div);
}
