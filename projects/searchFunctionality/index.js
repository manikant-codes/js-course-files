const movies = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    desc: "Two imprisoned men bond over their shared love of football.",
    genre: "Drama",
    rating: 9.3,
  },
  {
    id: 2,
    name: "The Godfather",
    desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    genre: "Crime, Drama",
    rating: 9.2,
  },
  {
    id: 3,
    name: "The Dark Knight",
    desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical challenges of his career.",
    genre: "Action, Crime, Drama",
    rating: 9.0,
  },
  {
    id: 4,
    name: "Pulp Fiction",
    desc: "The lives of two mob hitmen, a boxer, a gangster, and his wife, intertwine in four tales of violence and redemption.",
    genre: "Crime, Drama",
    rating: 8.9,
  },
  {
    id: 5,
    name: "Fight Club",
    desc: "An insomniac office worker, looking for a way to combat his insomnia, crosses paths with a seemingly perfect man who lives in an isolated, underground bunker.",
    genre: "Drama, Psychological Thriller",
    rating: 8.8,
  },
  {
    id: 6,
    name: "Inception",
    desc: "A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    genre: "Action, Mystery, Sci-Fi, Thriller",
    rating: 8.8,
  },
  {
    id: 7,
    name: "The Matrix",
    desc: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    genre: "Action, Sci-Fi",
    rating: 8.7,
  },
  {
    id: 8,
    name: "Goodfellas",
    desc: "The story of five mobsters growing up in the Italian-American crime syndicate during the 1950s.",
    genre: "Crime, Drama",
    rating: 8.7,
  },
  {
    id: 9,
    name: "Se7en",
    desc: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.",
    genre: "Crime, Drama, Mystery, Thriller",
    rating: 8.6,
  },
  {
    id: 10,
    name: "The Silence of the Lambs",
    desc: "A young FBI cadet must prevent a serial killer from taking hostages at a massive shopping mall.",
    genre: "Crime, Drama, Mystery, Thriller",
    rating: 8.6,
  },
  {
    id: 11,
    name: "The Lion King",
    desc: "A young lion cub, Simba, is transformed from a poor farm animal into a wise and just king.",
    genre: "Animation, Adventure, Drama, Family, Musical",
    rating: 8.5,
  },
  {
    id: 12,
    name: "Star Wars: Episode IV - A New Hope",
    desc: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee, and two droids to save the galaxy from the Empire.",
    genre: "Action, Adventure, Fantasy, Sci-Fi",
    rating: 8.7,
  },
  {
    id: 13,
    name: "The Usual Suspects",
    desc: "A secret agent, a journalist, and a group of friends go on a dangerous mission to uncover a sinister organization while being pursued by an assassin.",
    genre: "Crime, Mystery, Thriller",
    rating: 8.6,
  },
  {
    id: 14,
    name: "The Shining",
    desc: "A family moves to a new house, only to discover that it is haunted by a malevolent entity.",
    genre: "Drama, Horror",
    rating: 8.4,
  },
  {
    id: 15,
    name: "Casablanca",
    desc: "A cynical American expatriate struggles to stay alive during World War II in Casablanca, while forming an unlikely friendship with a fellow resident.",
    genre: "Drama, Romance, War",
    rating: 8.5,
  },
  {
    id: 16,
    name: "2001: A Space Odyssey",
    desc: "Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the help of intelligent supercomputer H.A.L. 9000, sets off on a quest to find its origins.",
    genre: "Adventure, Drama, Sci-Fi",
    rating: 8.3,
  },
  {
    id: 17,
    name: "Raiders of the Lost Ark",
    desc: "In 1936, archaeologist and adventurer Indiana Jones is hired by the US government to find a mythical artifact known as the Ark of the Covenant.",
    genre: "Action, Adventure",
    rating: 8.2,
  },
  {
    id: 18,
    name: "The Godfather Part II",
    desc: "The early life of Vito Corleone is portrayed while his son, Michael, expands and tightens his grip on his crime family stretching from New York City to Los Angeles.",
    genre: "Crime, Drama",
    rating: 9.0,
  },
  {
    id: 19,
    name: "The Lord of the Rings: The Fellowship of the Ring",
    desc: "A young hobbit, Frodo Baggins, embarks on a quest to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
    genre: "Adventure, Drama, Fantasy",
    rating: 8.8,
  },
];

const moviesList = document.getElementById("movies-list");

const moviesListItems = movies.map(function (element) {
  return `<li class="movie">
    <p class="movie-id">${element.id}</p>
    <h3 class="movie-name">${element.name}</h3>

    <p class="movie-desc">
      ${element.desc}
    </p>
    <p class="movie-genre">${element.genre}</p>
  </li>`;
});

moviesList.innerHTML = moviesListItems.join("");
