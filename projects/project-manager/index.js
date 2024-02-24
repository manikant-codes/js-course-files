function addTask() {
  const titleInput = document.getElementById("taskTitle");
  const descInput = document.getElementById("taskDesc");
  const cardsContainer = document.getElementById("cardsContainer");

  const card = document.createElement("div");
  card.className = "card";

  const cardCompleted = document.createElement("div");
  cardCompleted.className = "cardCompleted";

  const title = document.createElement("h3");
  // title.innerText = titleInput.value;
  const titleTextNode = document.createTextNode(titleInput.value);
  title.appendChild(titleTextNode);

  const desc = document.createElement("p");
  // desc.innerText = descInput.value;
  const descTextNode = document.createTextNode(descInput.value);
  desc.appendChild(descTextNode);

  const taskCompleted = document.createElement("p");
  const taskCompletedTextNode = document.createTextNode("Task completed!");
  taskCompleted.appendChild(taskCompletedTextNode);

  const deleteBtn = document.createElement("button");
  const btnTextNode = document.createTextNode("Delete");
  deleteBtn.appendChild(btnTextNode);

  deleteBtn.onclick = () => {
    cardsContainer.removeChild(card);
  };

  const completedBtn = document.createElement("button");
  completedBtn.className = "completedBtn";
  const completedBtnTextNode = document.createTextNode("Completed");
  completedBtn.appendChild(completedBtnTextNode);

  completedBtn.onclick = () => {
    console.log("called");
    cardsContainer.replaceChild(cardCompleted, card);
  };

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(completedBtn);
  card.appendChild(deleteBtn);

  cardCompleted.appendChild(title.cloneNode(true));
  cardCompleted.appendChild(desc.cloneNode(true));
  cardCompleted.appendChild(taskCompleted);
  cardCompleted.appendChild(deleteBtn.cloneNode(true));

  cardsContainer.appendChild(card);
}
