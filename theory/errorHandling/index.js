const person = undefined;

function getPersonInfo(person) {
  try {
    return `Name: ${person.name}, ID: ${person.id}, City: ${person.city}`;
  } catch (err) {
    alert("Something went wrong!");
  }
}

console.log(getPersonInfo(person));
