// Objects
// Object ek data-structure hai, data-structure yane data ko store karne ka tarika.
// Object me aap multiple values store kar sakte hoo. Kasie? To key:value pair me.
// Key aur value ko ":" colon se seperate karte hain.
// Pure key/attribute/property:value pair ko property kahenge.
// Do key:value pairs ko aap "," comma se seperate karte hoo.

// Kyu objects ka use karenge?
// To real world me jo chize hai wo complex hain, yane simple ek ya do value likh ke aap unko apne code me sahi se describe nahi karsakte. Unki bohot saari properties hooskati hai aur wo/unse kuch kaam kar sakte hai.
// To unhe properly hamare code me as single unit describe karne ke liye ham objects ka use karte hain.

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

const fan = {
  price: 1500,
  brand: "Crompton",
  modelNo: 1121,
  isOn: false,
  maxSpeed: 5,
  minSpeed: 1,
  currentSpeed: 1,
};

// Aise ham object ke andar se properties access karte hain.
// console.log("fan.status", fan.status);
// console.log("fan.maxSpeed", fan.maxSpeed);
// console.log("fan.currentSpeed", fan.currentSpeed);

function toggleFan() {
  if (fan.isOn === "on") {
    fan.isOn = true;
  } else {
    fan.isOn = false;
  }
  console.log("fanStatus", fan.isOn);
}

// toggleFan();
// toggleFan();

function increaseSpeed() {
  if (fan.currentSpeed < fan.maxSpeed) {
    fan.currentSpeed++;
    console.log("fanCurrentSpeed", fan.currentSpeed);
  } else {
    console.log("Already at Max Speed");
  }
}

// increaseSpeed();
// increaseSpeed();
// increaseSpeed();
// increaseSpeed();
// increaseSpeed();

// Task
// light object banana hai.
// main properties rahengi, isOn, currentColor, maxBrightness - 5, minBrightNess - 1
// 3 function banane hai
// light chalu band karne ka
// color change karne ka
// brightness badhane ka
// brightness ghatane ka
