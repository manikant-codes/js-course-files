const movies = [
  {
    name: "The Shawshank Redemption",
    rating: 9.3,
    genre: ["Drama", "Crime"],
  },
  {
    name: "Spirited Away",
    rating: 8.8,
    genre: ["Animation", "Fantasy", "Adventure"],
  },
  {
    name: "The Dark Knight",
    rating: 9.0,
    genre: ["Action", "Crime", "Thriller"],
  },
  {
    name: "Parasite",
    rating: 8.6,
    genre: ["Thriller", "Comedy", "Drama"],
  },
  {
    name: "Inception",
    rating: 8.8,
    genre: ["Action", "Sci-Fi", "Thriller"],
  },
];

const genres = [
  "action",
  "adventure",
  "animation",
  "comedy",
  "crime",
  "drama",
  "fantasy",
  "sci-fi",
  "thriller",
];

function getMovies(query) {
  if (!Number(query) && !genres.includes(query.toString().toLowerCase())) {
    return getMoviesByName(query);
  }
  if (!!Number(query)) {
    return getMoviesByRating(query);
  }
  if (genres.includes(query.toString().toLowerCase())) {
    return getMoviesByGenre(query.split(","));
  }
}

function getMoviesByName(name) {
  return movies.filter((movie, index) => {
    return movie.name.toLowerCase().includes(name.toLowerCase());
  });
}

function getMoviesByRating(rating) {
  return movies.filter((movie, index) => {
    return movie.rating >= rating;
  });
}
function getMoviesByGenre(genre) {
  return movies
    .map((movie) => {
      const genreNew = movie.genre.map((g) => g.toLowerCase());
      console.log(genreNew);
      return { ...movie, genre: genreNew };
    })
    .filter((movie, index) => {
      for (let g of genre) {
        if (movie.genre.includes(g)) {
          return true;
        }
      }
    });
}
