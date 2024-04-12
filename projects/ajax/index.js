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

        html = `
                <table class="table">
                    <tbody>
                        <tr>
                            <td>${response[0].id}</td>
                            <td>${response[0].name}</td>
                        </tr>
                        <tr>
                            <td>${response[1].id}</td>
                            <td>${response[1].name}</td>
                        </tr>
                        <tr>
                            <td>${response[2].id}</td>
                            <td>${response[2].name}</td>
                        </tr>
                    </tbody>
                </table>
            `;

        tableContainer.innerHTML = html;
      } else {
        tableContainer.innerHTML = "Something went wrong!";
      }
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhttp.send();
}

function postData() {
  const xhttp = new XMLHttpRequest();

  const data = {
    fname: "Henry",
    lname: "Ford",
    city: "Surat",
  };

  xhttp.onload = function () {
    console.log("this.response", this.response);
  };

  xhttp.open("POST", "https://jsonplaceholder.typicode.com/users", true);
  //   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //   xhttp.send("fname=Henry&lname=Ford&city=Surat");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(data));
}
