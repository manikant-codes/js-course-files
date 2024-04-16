function getData() {
  const xhttp = new XMLHttpRequest();

  let html = "";

  //   xhttp.onload = function () {
  //     const response = JSON.parse(this.response);

  //     html = `
  //         <table class="table">
  //             <tbody>
  //                 <tr>
  //                     <td>${response[0].id}</td>
  //                     <td>${response[0].name}</td>
  //                 </tr>
  //                 <tr>
  //                     <td>${response[1].id}</td>
  //                     <td>${response[1].name}</td>
  //                 </tr>
  //                 <tr>
  //                     <td>${response[2].id}</td>
  //                     <td>${response[2].name}</td>
  //                 </tr>
  //             </tbody>
  //         </table>
  //     `;

  //     document.getElementById("tableContainer").innerHTML = html;
  //   };

  xhttp.onreadystatechange = function () {
    const tableContainer = document.getElementById("tableContainer");

    console.log("this.readyState", this.readyState);

    if (this.readyState < 4) {
      tableContainer.innerHTML = "Loading...";
    } else {
      if (this.status === 200) {
        const response = JSON.parse(this.response);

        console.log("html 0", html);

        html = html + `<table class="table"> <tbody>`;

        console.log("html 1", html);

        for (let i = 0; i < response.length; i++) {
          response[i];
          html =
            html +
            `
              <tr>
                <td>${response[i].id}</td>
                <td>${response[i].name}</td>
              </tr>
            `;
        }

        console.log("html 2", html);

        html = html + `</tbody> </table>`;

        console.log("html 3", html);

        tableContainer.innerHTML = html;
      } else {
        tableContainer.innerHTML = "Something went wrong!";
      }
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhttp.send();
}

// function postData() {
//   const xhttp = new XMLHttpRequest();
//   const data = {
//     fname: "Henry",
//     lname: "Ford",
//     city: "Surat",
//   };
//   xhttp.onload = function () {
//     console.log("this.response", this.response);
//   };
//   xhttp.open("POST", "https://jsonplaceholder.typicode.com/users", true);
//   //   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   //   xhttp.send("fname=Henry&lname=Ford&city=Surat");
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.send(JSON.stringify(data));
// }

function handleSubmit(event) {
  event.preventDefault();

  const phoneRegex =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  let name = event.target.name.value.trim();
  let email = event.target.email.value.trim();
  let phone = event.target.phone.value.toString();

  if (name === "") {
    alert("Please provide a valid name!");
    return;
  }

  if (phoneRegex.test(phone) === false) {
    alert("Please provide a valid phone number!");
    return;
  }

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    console.log(this.response);
    event.target.reset();
  };

  xhttp.open("POST", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.setRequestHeader("content-type", "application/json");
  xhttp.send(JSON.stringify(data));
}
