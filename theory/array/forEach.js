// forEach ek array method hai.
// Yane aap kisi bhi array pe .forEach() likh ke use call kar sakte hoo.
// forEach argument me ek function leta hai.
// forEach turn by turn array ke har element ko lega aur uspe aap ka diya hua function chalaega.
// Is funtion ko forEach 3 argument dega: value, index aur array.
// value me jis element ki baari ho wo milega.
// index me jis element ki baari ho uska index milega.
// array me jis array pe aapne forEach chalaya hoo wo array milega.
// array me se har element le ke uspe ek function chalana hoo / kuch kaam karna hoo to ham forEach ka use karenge.
// forEach kuch return nahi karta hai.

const fruits = ["Apple", "Mango", "Orange", "Banana"];

const list = document.getElementById("fruits-list");

let text = "";

// for (let i = 0; i < fruits.length; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }

const returnValue = fruits.forEach(function (value, index, array) {
  text += "<li>" + value + "</li>";
});

list.innerHTML = text;

console.log("returnValue", returnValue);
