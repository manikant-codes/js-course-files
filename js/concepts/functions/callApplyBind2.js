// call, apply, bind

const person1 = {
  fname: "Shahrukh",
  lname: "Khan",
  getFullName: function (age, citizenship, pronoun) {
    console.log(
      `${this.fname} ${this.lname} is ${citizenship} citizen. ${pronoun} is ${age} years old.`
    );
  },
};

const person2 = {
  fname: "Akshay",
  lname: "Kumar",
};

const person3 = {
  fname: "Alia",
  lname: "Bhatt",
};

const person4 = {
  fname: "Kiara",
  lname: "Advani",
};

person1.getFullName(58, "Indian", "He");
person1.getFullName.call(person2, 56, "Indian", "He");
person1.getFullName.apply(person3, [30, "Indian", "She"]);

const newGetFullName = person1.getFullName.bind(person4);

newGetFullName(31, "Indian", "She");

// closure

// closure = function + parent scope ke wo variables jinka wo function use kar raha hoo.
// Function ke variables private karne ke liye closures ka use karenge.
// Private yane unhe function ke bahar rakhe bina, unhe function ke bahar se use kar sake.

// function counter() {
//   let count = 0; // Only once.
//   count++;
//   console.log(count);
// }

function counter() {
  let count = 0; // Only once.
  function increcement() {
    count++;
    console.log(count);
  }
  return increcement;
}

const plus = counter();
plus();
plus();
plus();
