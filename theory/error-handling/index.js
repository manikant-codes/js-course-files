const data = undefined;

try {
  const newArr = data.map((value) => {
    return `<li>${value}</li>`;
  });

  console.log(newArr);
} catch (error) {
  console.log(error.message);
  alert("something went wrong!");
}
