import films from "./mocks/films";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const genreList = new Set(films.map((film) => (film.genre)));
