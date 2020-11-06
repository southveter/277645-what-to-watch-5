export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const genreList = (films) => {
  return [`All genres`, ...Array.from(
      new Set(films.map((film) => (film.genre)))
  )];
};
