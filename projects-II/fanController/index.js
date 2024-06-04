const swingStatus = document.getElementById("swing-status");
const onStatus = document.getElementById("on-status");
const currentSpeed = document.getElementById("current-speed");

const fan = {
  fanCompany: "Crompton",
  fanColor: "White",
  isSwingOn: false,
  isOn: false,
  currentSpeed: 0,
  maxSpeed: 5,
  minSpeed: 0,
  swingOn: function () {
    if (this.isOn) {
      this.isSwingOn = true;
      swingStatus.innerText = "Swing is On";
    }
  },
  swingOff: function () {
    if (this.isOn) {
      this.isSwingOn = false;
      swingStatus.innerText = "Swing is Off";
    }
  },
  powerOn: function () {
    this.isOn = true;
    onStatus.innerText = "Fan is On";
  },
  powerOff: function () {
    this.isOn = false;
    onStatus.innerText = "Fan is Off";
  },
  increaseSpeed: function () {
    if (this.isOn) {
      if (this.currentSpeed < this.maxSpeed) {
        this.currentSpeed++;
        currentSpeed.innerText = "Current Speed: " + this.currentSpeed;
      }
    }
  },
  decreaseSpeed: function () {
    if (this.isOn) {
      if (this.currentSpeed > this.minSpeed) {
        this.currentSpeed--;
        currentSpeed.innerText = "Current Speed: " + this.currentSpeed;
      } else {
        this.isOn = false;
        this.isSwingOn = false;
        onStatus.innerText = "Fan is Off";
        swingStatus.innerText = "Swing is Off";
        currentSpeed.innerText = "Current Speed: " + 0;
      }
    }
  },
};
