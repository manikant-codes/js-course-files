function getData() {
  const xhttp = new XMLHttpRequest();

  let html = "";

  xhttp.onload = function () {
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
    document.getElementById("tableContainer").innerHTML = html;
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhttp.send();
}
