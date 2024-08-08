const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  phone: "123-456-7890",
  jobTitle: "Software Developer",
  company: "Tech Solutions",
  salary: 75000,
  startDate: "2022-01-15",
  isEating: function (food) {
    console.log(this.firstName + " " + this.lastName + " is eating " + food);
  },
  isVisiting: function (city) {
    console.log(
      person.firstName + " " + person.lastName + " is visiting " + city
    );
  },
};

console.log(person.firstName);
console.log(person.isEating("pizza"));
console.log(person["firstName"]);
