const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

// cars.sort(function (a, b) {
//   return a.year - b.year;
// });
cars.sort(function (a, b) {
  if (a.type.toLowerCase() > b.type.toLowerCase()) {
    return 1;
  } else if (a.type.toLowerCase() < b.type.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
});

console.log(cars);
