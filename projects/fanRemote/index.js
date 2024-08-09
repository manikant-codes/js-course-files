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
  minSpeed: 1,
  switchOn: function () {
    this.isOn = true;
    onStatusPara.innerHTML = "Fan is On";
  },
  switchOff: function () {
    this.isOn = false;
    onStatusPara.innerHTML = "Fan is Off";
  },
  swingOn: function () {
    if (this.isOn === true) {
      this.isSwinging = true;
      swingStatusPara.innerHTML = "Swing is On";
    }
  },
  swingOff: function () {
    if (this.isOn === true) {
      this.isSwinging = false;
      swingStatusPara.innerHTML = "Swing is Off";
    }
  },
  increaseSpeed: function () {
    if (this.isOn === true) {
      if (this.currentSpeed < this.maxSpeed) {
        this.currentSpeed++;
        speedStatusPara.innerHTML = "Speed is " + this.currentSpeed;
      }
    }
  },
  decreaseSpeed: function () {
    if (this.isOn === true) {
      if (this.currentSpeed > this.minSpeed) {
        this.currentSpeed--;
        speedStatusPara.innerHTML = "Speed is " + this.currentSpeed;
      } else {
        this.isOn = false;
        this.isSwinging = false;
        this.currentSpeed = 0;
        speedStatusPara.innerHTML = "Speed is " + this.currentSpeed;
        onStatusPara.innerHTML = "Fan is Off";
        swingStatusPara.innerHTML = "Swing is Off";
      }
    }
  },
};
