// click ek event (ghatna) hai.
// onclick ek event listener hai, event listner ka kaam hoota hai event ke liye listen karna ya sun na, aur jab wo event hoo to use diya gaya event handler chalana.
// event handler ek function hai jo aap event listener ko dete hoo.
// html attribute ke case me element ko wo event handler milta hai. App use us event handler ke andar ka code dete hoo.
// Aur is tarike se: document.getElementById("btn2").onclick = greetings;
// aap pura event handler function dete hoo.
// addEventListener se diye gaye event listener ki priority default event listener se zada hoogi.

function greetings(message) {
  alert(message);
}

// const btn = document.getElementById("btn1");
const div = document.getElementById("div");
// const para = document.getElementById("para");

// document.getElementById("btn1").onclick = function () {
//   greetings("Hi");
// };

// para.addEventListener(
//   "click",
//   function () {
//     greetings("Bye");
//   },
//   true
// );

// function divClickHandler() {
//   greetings("Hello");
// }

// div.addEventListener("click", divClickHandler, true);
// div.removeEventListener("click", divClickHandler, true);
