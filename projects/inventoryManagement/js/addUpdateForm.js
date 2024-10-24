function storeToLocalStorage(product) {
  let inventory = JSON.parse(localStorage.getItem("inventory"));

  if (!inventory) {
    inventory = [];
  }

  inventory.push(product);

  localStorage.setItem("inventory", JSON.stringify(inventory));
}

function handleSubmit(event) {
  event.preventDefault();

  const product = {};

  product.id = Date.now();
  product.img = event.target["img"].value;
  product.name = event.target["name"].value;
  product.desc = event.target["desc"].value;
  product.price = Number(event.target["price"].value);
  product.qty = Number(event.target["qty"].value);

  storeToLocalStorage(product);

  alert("Added Successfully!");

  event.target.reset();
}
