const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");
const list = document.getElementById("users-list");

fetchPromise
  .then((response) => {
    const jsonPromise = response.json();
    jsonPromise
      .then((data) => {
        let html = "";
        for (const user of data) {
          html += `<li>${user.name}</li>`;
        }
        list.innerHTML = html;
      })
      .catch((error) => {
        console.log("error", error);
      });
  })
  .catch((error) => {
    console.log("error", error);
  });
