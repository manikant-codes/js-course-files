const classRoom = document.getElementById("classRoom");
let seats = "";
// const arrCols = ["A", "B", "C"];
const arrCols = ["A", "B"];
const lastCol = arrCols[length - 1];
let benchesPerCol = 3;
let arrSeats = [];

for (let i = 0; i < arrCols.length; i++) {
  for (let j = 1; j <= 9; j++) {
    arrSeats.push(arrCols[i] + "-" + j);
  }
}

arrSeats = arrSeats.reverse();
arrSeats.forEach((seat) => {
  if (seat.match(/-9$/)) {
    if (seat[0] === lastCol) {
      seats += `
            <div id="col${seat[0]}">
              <ul>
                <ul class="row">
                  <li id="${seat}">${seat}</li>
              `;
    } else {
      seats += `
            </ul>
            </div>
            <div id="col${seat[0]}">
              <ul>
                <ul class="row">
                  <li id="${seat}">${seat}</li>
              `;
    }
  } else {
    if (seat.match(/(-18$)|(-15$)|(-12$)|(-9$)|(-6$)|(-3$)/)) {
      seats += `</ul><ul class="row"><li id="${seat}">${seat}</li>`;
    } else {
      seats += `<li id="${seat}">${seat}</li>`;
    }
  }
});

classRoom.innerHTML = seats;

function getRandomSeat() {
  const random = Math.floor(Math.random() * arrSeats.length) + 1;
  const randomSeat = arrSeats[random];
  document.getElementById(randomSeat).setAttribute("class", "active");
}

getRandomSeat();
