// forEach
// forEach ek built-in array method hai. Yane aap kisi bhi array pe ise dot kar ke access kar sakte hoo.
// Method hai, isi liye call karna padega.
// Jab call karoge to ise ek function dena padega as an argument.
// Is function ko forEach 3 chize dega as an argument: value, index and array.
// forEach turn by turn har array element ko access karega, aur har array element ke liye aap ka function (app ne for eack ko jo function diya hai wo) call karega.
// Aap ka function call kar ke, use value me wo element, index me us element ka index aur array me pura array pass karega.

// Is function me aap jo code likho ge wo har element ke liye chalega.

const obj = {
  add: function (n1, n2) {
    return n1 + n2;
  },
};

obj.add(2, 4);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fruits = [
  {
    name: "Apple",
    price: "100/kg",
    img: "https://subzfresh.com/wp-content/uploads/2022/04/apple_158989157.jpg",
  },
  {
    name: "Banana",
    price: "20/kg",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg",
  },
  {
    name: "Cherry",
    price: "200/kg",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/640px-Cherry_season_%2848216568227%29.jpg",
  },
  {
    name: "Cherry",
    price: "200/kg",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/640px-Cherry_season_%2848216568227%29.jpg",
  },
  {
    name: "Cherry",
    price: "200/kg",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/640px-Cherry_season_%2848216568227%29.jpg",
  },
  {
    name: "Cherry",
    price: "200/kg",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/640px-Cherry_season_%2848216568227%29.jpg",
  },
];

const temp = [];

fruits.forEach(function (value, index, array) {
  temp.push(`<div class="fruitCard">
  <img src="${value.img}" alt="" />
  <p>${value.name}</p>
  <p>${value.price}</p>
  </div>`);
});

document.getElementById("outputContainer").innerHTML = temp.join("");

console.log("temp", temp);
