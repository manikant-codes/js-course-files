// id
// species
// limbs
// food
// height
// length
// weight
// hasTail
// eat()
// sleep()
// move()
// swim()
// climb()

class Animal {
  constructor(id, species, limbs, weight, hasTail) {
    this.id = id;
    this.species = species;
    this.limbs = limbs;
    this.weight = weight;
    this.hasTail = hasTail;
  }

  eat() {
    console.log("Eating");
  }

  sleep() {
    console.log("Sleeping");
  }

  move() {
    console.log("Moving");
  }
}

class Chimp extends Animal {
  constructor(height, id, species, limbs, weight, hasTail) {
    super(id, species, limbs, weight, hasTail);
    this.height = height;
  }

  static food = "Fruits";

  climb() {
    console.log("Climbing");
  }
}

// class Shark extends Animal {
//   constructor(length, id, species, limbs, food, weight, hasTail) {
//     super(id, species, limbs, food, weight, hasTail);
//     this.length = length;
//   }

//   eat() {
//     console.log("Shark is Eating");
//   }

//   swim() {
//     console.log("Swimming");
//   }
// }

// class Tiger extends Animal {
//   constructor(length, id, species, limbs, food, weight, hasTail) {
//     super(id, species, limbs, food, weight, hasTail);
//     this.length = length;
//   }

//   climb() {
//     console.log("Climbing");
//   }

//   swim() {
//     console.log("Swimming");
//   }
// }

// const shark1 = new Shark(20, 1, "Shark", 0, "Fishes", 100, true);
// const tiger1 = new Tiger(30, 3, "Tiger", 4, "Fishes", 50, true);
const chimp1 = new Chimp(20, 2, "Chimp", 4, 50, false);

// console.log(shark1);
// console.log(tiger1);
console.log(chimp1);
