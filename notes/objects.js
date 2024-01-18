// Objects
// Object ek data-structure hai, data-structure yane data ko store karne ka tarika.
// Object me aap multiple values store kar sakte hoo. Kasie? To key:value pair me.
// Key aur value ko ":" colon se seperate karte hain.
// Pure key/attribute/property:value pair ko property kahenge.
// Do key:value pairs ko aap "," comma se seperate karte hoo.

// Kyu objects ka use karenge?
// To real world me jo chize hai wo complex hain, yane simple ek ya do value likh ke aap unko apne code me sahi se describe nahi karsakte. Unki bohot saari properties hooskati hai aur wo/unse kuch kaam kar sakte hai.
// To unhe properly hamare code me as single unit describe karne ke liye ham objects ka use karte hain.

// Methods & this Keyword
// Object ke andar ke functions ko methods kaha jaata hai.
// Object ke functions ko object ki propertices directly nahi milti, unke andar object ki properties yato aap object.property kar ke access kar sakte hoo ya this.property kar ke kar sakte hoo.
// Aap ko object.property kar ke nahi access karna hai. this.property kar ke access karna hai.

// let fanPrice = 1500;
// let fanBrand = "Crompton";
// let fanCoolor = "White";
// let fanModelNo = "1121";
// let fanMaxSpeed = 5;
// let fanMinSpeed = 1;
// let fanStatus = "on";
// let fanCurrentSpeed = 1;

// function toggleFan() {
//   if (fanStatus === "on") {
//     fanStatus = "off";
//   } else {
//     fanStatus = "on";
//   }
//   console.log("fanStatus", fanStatus);
// }

// function increaseSpeed() {
//   if (fanCurrentSpeed < fanMaxSpeed) {
//     fanCurrentSpeed++;
//     console.log("fanCurrentSpeed", fanCurrentSpeed);
//   } else {
//     console.log("Already at Max Speed");
//   }
// }

// toggleFan();
// increaseSpeed();

// const fan = {
//   price: 1500,
//   brand: "Crompton",
//   modelNo: 1121,
//   isOn: false,
//   maxSpeed: 5,
//   minSpeed: 1,
//   currentSpeed: 1,
// };

// Aise ham object ke andar se properties access karte hain.
// console.log("fan.status", fan.status);
// console.log("fan.maxSpeed", fan.maxSpeed);
// console.log("fan.currentSpeed", fan.currentSpeed);

// function toggleFan() {
//   if (fan.isOn === "on") {
//     fan.isOn = true;
//   } else {
//     fan.isOn = false;
//   }
//   console.log("fanStatus", fan.isOn);
// }

// toggleFan();
// toggleFan();

// function increaseSpeed() {
//   if (fan.currentSpeed < fan.maxSpeed) {
//     fan.currentSpeed++;
//     console.log("fanCurrentSpeed", fan.currentSpeed);
//   } else {
//     console.log("Already at Max Speed");
//   }
// }

// increaseSpeed();
// increaseSpeed();
// increaseSpeed();
// increaseSpeed();
// increaseSpeed();

// --------------------------------------------------
// Accessing Object Properties
// --------------------------------------------------

// const fan = {
//   price: 1500,
//   brand: "Crompton",
//   modelNo: 1121,
//   isOn: false,
//   maxSpeed: 5,
//   minSpeed: 1,
//   currentSpeed: 1,
//   "warranty period": "2 years",
// };

// Dot notation
// console.log("price", fan.price);
// console.log("brand", fan.brand);

// Square bracket notation
// console.log("sq price", fan["price"]);
// console.log("sq brand", fan["brand"]);

// This won't work.
// console.log("brand", fan.warranty period);
// This would.
// console.log("brand", fan["warranty period"]);

// const key = "maxSpeed";
// Ye undefined dega, kyu ke fan me koi key property nahi hai.
// console.log("brand", fan.key);
// Ye maxSpeed dega.
// console.log("brand", fan[key]);
// (☝️) Ye Iske (👇) barabar hai.
// console.log("brand", fan["maxSpeed"]);

// --------------------------------------------------
// Methods
// --------------------------------------------------

// const person = {
//   fname: "Arjun",
//   lname: "Kapoor",
//   birthYear: 1965,
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   calcAge: function () {
//     return 2024 - this.birthYear;
//   },
// };

// console.log(person.getFullName());
// console.log(person.calcAge());

// const fan = {
//   price: 1500,
//   brand: "Crompton",
//   modelNo: 1121,
//   isOn: false,
//   maxSpeed: 5,
//   minSpeed: 1,
//   currentSpeed: 1,
//   toggleFan: function () {
//     if (this.isOn === false) {
//       this.isOn = true;
//     } else {
//       this.isOn = false;
//     }
//     console.log("isOn", this.isOn);
//   },
//   increaseSpeed: function () {
//     if (this.currentSpeed < this.maxSpeed) {
//       this.currentSpeed++;
//       console.log("fanCurrentSpeed", this.currentSpeed);
//     } else {
//       console.log("Already at Max Speed");
//     }
//   },
// };

// toggleFan();
// increaseSpeed();

// console.log("fan.toggleFan", fan.toggleFan());
// console.log("fan.toggleFan", fan.toggleFan());

// fan.toggleFan();
// fan.toggleFan();
// fan.increaseSpeed();
// fan.increaseSpeed();

// --------------------------------------------------
// Tasks
// --------------------------------------------------

// 1
// -----
// light object banana hai
// main properties rahengi, isOn, currentColor, maxBrightness - 5, minBrightNess - 1
// 4 function banane hai
// light chalu band karne ka
// color change karne ka
// brightness badhane ka
// brightness ghatane ka

// 2
// -----

// car ka object banana hai.
// Uske andar ye properties rahengi:
// fuel
// maxFuelCapacity
// currentSpeed
// maxSpeed
// distanceTravelled
// Uske andar ye methods rahenge:
// accelerate: Iske call pe speed badhani hai, zada se zada maxSpeed tak jana hai. Aur distanceTravelled bhi badhana hai, aur fuel ghatana hai.
// break: Iske call pe speed ghatani hai, last 0 tak ghategi.
// fillFuel: Iske call pe fuel badhana hai, utne se jitna fuel dalaya hoo. Max fuel capacity se jada fuel jana chahiye nahi.

const car = {
  fuel: 10,
  maxFuelCapacity: 10,
  currentSpeed: 0,
  maxSpeed: 100,
  distanceTravelled: 0,
  accelerate: function () {
    // agar speed max speed se kam hoo to speed badhani hai
    // distance travelled bhi badhana hai
    // agar fuel 0 se zada hoo to fuel ghatana hai
    if (this.fuel > 0) {
      if (this.currentSpeed < this.maxSpeed) {
        this.currentSpeed = this.currentSpeed + 10;
      }
      this.distanceTravelled += 10;
      this.fuel--;
    } else {
      this.currentSpeed = 0;
      console.log("Out of fuel!");
    }

    console.log("this.distanceTravelled", this.distanceTravelled);
    console.log("this.currentSpeed", this.currentSpeed);
    console.log("this.fuel", this.fuel);
  },
  break: function () {
    // Decrease speed if speed more than 0;
    if (this.currentSpeed > 0) {
      this.currentSpeed -= 10;
      console.log("this.currentSpeed", this.currentSpeed);
    } else {
      console.log("Car has stopped!");
    }
  },
  fillFuel: function (addedFuel) {
    // Jitne se kaha hoo utne se fuel badhana hai.
    // Fuel badhana hai agar fuel max capacity se kam hoo.
    const totalFuel = this.fuel + addedFuel;
    if (totalFuel <= this.maxFuelCapacity) {
      this.fuel = totalFuel;
      console.log("this.fuel", this.fuel);
    } else {
      console.log("Sorry can't fill fuel!");
      console.log("Current fuel is ", this.fuel);
      console.log("Maximum fuel capacity is ", this.maxFuelCapacity);
    }
  },
};

car.fillFuel(1);
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.fillFuel(10);
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
