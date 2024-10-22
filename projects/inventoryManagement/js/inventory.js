const productsContainer = document.getElementById("products-container");

const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

let html = "";

inventory.forEach((product, index, array) => {
  html += `
        <div class="product-card">
            <div class="product-img">
                <img src="${product.img}" alt="${product.name}" />
            </div>
            <div>
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
            </div>
        </div>
    `;
});

productsContainer.innerHTML = html;
