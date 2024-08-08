const onStatusPara = document.getElementById("on-status");
const swingStatusPara = document.getElementById("swing-status");
const speedStatusPara = document.getElementById("speed-status");

const fan = {
  color: "white",
  name: "Havells Swing",
  company: "Hevells",
  price: 2175,
  isOn: false,
  isSwinging: false,
  currentSpeed: 0,
  maxSpeed: 5,
  minSpeed: 0,
  switchOn: function () {
    this.isOn = true;
    onStatusPara.innerHTML = "Fan is On";
  },
  switchOff: function () {
    this.isOn = false;
    onStatusPara.innerHTML = "Fan is Off";
  },
  swingOn: function () {
    this.isSwinging = true;
    swingStatusPara.innerHTML = "Swing is On";
  },
  swingOff: function () {
    this.isSwinging = false;
    swingStatusPara.innerHTML = "Swing is Off";
  },
  increaseSpeed: function () {
    this.currentSpeed++;
    speedStatusPara.innerHTML = "Speed is " + this.currentSpeed;
  },
  decreaseSpeed: function () {
    this.currentSpeed--;
    speedStatusPara.innerHTML = "Speed is " + this.currentSpeed;
  },
};
