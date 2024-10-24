const productsContainer = document.getElementById("products-container");

function renderInventory() {
  const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

  let html = "";

  inventory.forEach((product, index, array) => {
    html += `
            <div class="product-card">
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}" />
                </div>
                <div class="product-desc">
                    <div class="product-title-price">
                        <h3>${product.name}</h3>
                        <p class="product-price">₹${product.price.toLocaleString(
                          "en-in"
                        )}</p>
                    </div>
                    <p class="desc">${product.desc}</p>
                    <div class="actions">
                        <button onclick="handleRestock(${
                          product.id
                        })" class="btn-small">Restock</button>
                        <p>${product.qty}</p>
                        <button onclick="handleSell(${
                          product.id
                        })" class="btn-small">Sell</button>
                    </div>
                </div>
            </div>
        `;
  });

  productsContainer.innerHTML = html;
}

function handleRestock(id) {
  const inventory = JSON.parse(localStorage.getItem("inventory"));

  const foundProduct = inventory.find((product) => {
    return product.id === id;
  });

  foundProduct.qty++;

  localStorage.setItem("inventory", JSON.stringify(inventory));

  renderInventory();
}

function handleSell(id) {
  const inventory = JSON.parse(localStorage.getItem("inventory"));
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const foundProductInventory = inventory.find((product) => {
    return product.id === id;
  });

  if (foundProductInventory.qty > 0) {
    foundProductInventory.qty--;
  }

  const product = { ...foundProductInventory };
  product.qty = 1;
  product.orderDate = new Date();
  orders.push(product);

  localStorage.setItem("inventory", JSON.stringify(inventory));
  localStorage.setItem("orders", JSON.stringify(orders));

  renderInventory();
}

renderInventory();
