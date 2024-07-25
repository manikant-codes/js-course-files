const genres = [
  "drama",
  "crime",
  "action",
  "psychological thriller",
  "mystery",
  "sci-fi",
  "thriller",
  "animation",
  "adventure",
  "family",
  "musical",
  "fantasy",
  "horror",
  "romance",
  "war",
];

const foundValue = genres.findLastIndex(function (value, index, array) {
  if (value === "asd") {
    return true;
  }
  return false;
});

console.log("foundValue", foundValue);
