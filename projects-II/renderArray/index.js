const data = [
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsa?",
    price: "$100",
  },
];

const productsList = document.getElementById("products-list");

let html = "";

for (let i = 0; i < data.length; i++) {
  html += `<div class="product-card">
    <div class="product-img-container">
      <img
        src=${data[i].url}
        alt=""
      />
    </div>
    <div class="product-desc-container">
    <div class="product-title-container">
    <h3>${data[i].title}</h3>
    <p>${data[i].price}</p>
    </div>
    
    <p>
    ${data[i].desc}
    </p>
    <a href="productDetails.html?${data[i].title
      .replace(" ", "-")
      .toLowerCase()}">See More</a>
    </div>
  </div>`;
}

productsList.innerHTML = html;
