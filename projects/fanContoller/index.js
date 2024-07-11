const onStatus = document.getElementById("onStatus");
const swingStatus = document.getElementById("swingStatus");
const speedStatus = document.getElementById("speedStatus");

const fan = {
  //
  name: "Crompton",
  color: "White",
  price: 1500,
  //
  isOn: false,
  isSwingOn: false,
  currentSpeed: 0,
  switchOn: function () {
    this.isOn = true;
    this.currentSpeed = 1;

    onStatus.innerText = "Fan is On";
    speedStatus.innerText = "Speed: " + this.currentSpeed;
  },
  switchOff: function () {
    this.isOn = false;
    this.isSwingOn = false;
    this.currentSpeed = 0;

    onStatus.innerText = "Fan is Off";
    swingStatus.innerText = "Swing is Off";
    speedStatus.innerText = "Speed: " + this.currentSpeed;
  },
  swingOn: function () {
    this.isSwingOn = true;
    swingStatus.innerText = "Swing is On";
  },
  swingOff: function () {
    this.isSwingOn = false;
    swingStatus.innerText = "Swing is Off";
  },
  increaseSpeed: function () {
    if (this.isOn === true && this.currentSpeed < 5) {
      this.currentSpeed++;
      speedStatus.innerText = "Speed: " + this.currentSpeed;
    }
  },
  decreaseSpeed: function () {
    if (this.isOn === true && this.currentSpeed > 1) {
      this.currentSpeed--;
      speedStatus.innerText = "Speed: " + this.currentSpeed;
    } else {
      this.switchOff();
    }
  },
};
