"use strict";
// const movies = [
//   {
//     name: "The Shawshank Redemption",
//     rating: 9.3,
//     genre: ["Drama", "Crime"],
//   },
//   {
//     name: "Spirited Away",
//     rating: 8.8,
//     genre: ["Animation", "Fantasy", "Adventure"],
//   },
//   {
//     name: "The Dark Knight",
//     rating: 9.0,
//     genre: ["Action", "Crime", "Thriller"],
//   },
//   {
//     name: "Parasite",
//     rating: 8.6,
//     genre: ["Thriller", "Comedy", "Drama"],
//   },
//   {
//     name: "Inception",
//     rating: 8.8,
//     genre: ["Action", "Sci-Fi", "Thriller"],
//   },
// ];

// const genres = [
//   "action",
//   "adventure",
//   "animation",
//   "comedy",
//   "crime",
//   "drama",
//   "fantasy",
//   "sci-fi",
//   "thriller",
// ];

// function getMovies(query) {
//   if (!Number(query) && !genres.includes(query.toString().toLowerCase())) {
//     return getMoviesByName(query);
//   }
//   if (!!Number(query)) {
//     return getMoviesByRating(query);
//   }
//   if (genres.includes(query.toString().toLowerCase())) {
//     return getMoviesByGenre(query.split(","));
//   }
// }

// function getMoviesByName(name) {
//   return movies.filter((movie, index) => {
//     return movie.name.toLowerCase().includes(name.toLowerCase());
//   });
// }

// function getMoviesByRating(rating) {
//   return movies.filter((movie, index) => {
//     return movie.rating >= rating;
//   });
// }
// function getMoviesByGenre(genre) {
//   return movies
//     .map((movie) => {
//       const genreNew = movie.genre.map((g) => g.toLowerCase());
//       console.log(genreNew);
//       return { ...movie, genre: genreNew };
//     })
//     .filter((movie, index) => {
//       for (let g of genre) {
//         if (movie.genre.includes(g)) {
//           return true;
//         }
//       }
//     });
// }

// let a = 11;
// var aa = 10;

// b = 5;

const obj = {
  fname: "ASD",
  getFName: function (a, b, c) {
    return this.fname + a + b + c;
  },
};

const obj1 = {
  fname: "BCD",
};

// function asd() {
//   // let x = 10;
//   this;
// }

// asd();

// console.log(obj.getFName.bind(obj1)(1, 2, 3));

// console.log(obj.getFName.call(obj1, 1, 2, 3));
// console.log(obj.getFName.apply(obj1, [1, 2, 3]));
// console.log(Math.min.apply(null, [6, 2, 4, 56, 23, 456, 12]));

// console.log("b" + "a" + " " + "a")
// console.log(("b" + "a" + + "a" + "a").toLowerCase())
// function convertToBinary(number) {
//   let binary = number.toString(2);
//   binary = binary.padStart(4, "0");
//   return binary;
// }

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;
// let myPermission = 0;

// // 0000
// // 0010
// // 0010

// // 0010
// // 0100
// // 0000

// myPermission = myPermission | writePermission;

// let message = (myPermission & readPermission) ? "Yes" : "No";

// console.log(message);
