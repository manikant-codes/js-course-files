// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((err) => {
//     err;
//   });

// const users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//   },
// ];

// const users = null;

// try {
//   const list = document.querySelector("#list");

//   const newUsers = users.map((value, index, array) => {
//     return { id: value.id, name: value.name };
//   });

//   let content = `<ul>`;

//   newUsers.forEach((value) => {
//     content += `<li>${value.id} ${value.name}</li>`;
//   });

//   content += `</ul>`;

//   list.innerHTML = content;

//   console.log("newUsers", newUsers);
// } catch (err) {
//   //   alert(err.name + " " + err.message);
//   alert("Something went wrong!");
// } finally {
//   console.log("Task completed!");
// }

function handleDivide() {
  const resultPara = document.querySelector("#result");
  try {
    const dividend = Number(document.querySelector("#dividend").value);
    const divisor = Number(document.querySelector("#divisor").value);
    if (divisor === 0) {
      const errObj = new Error("Can't divide by zero!");
      throw errObj;
    }
    const result = dividend / divisor;
    resultPara.innerHTML = result;
  } catch (err) {
    resultPara.innerHTML = err.message;
  } finally {
    console.log("Task completed!");
  }
}
