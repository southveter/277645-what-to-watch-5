import {extend} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";

const initialState = {
  genre: `All genres`,
  films,
  filteredFilms: films,
};

const reducer = (state = initialState, action) => {


  switch (action.type) {
    case ActionType.SWITCH_GENRE:
      let filteredFilms;
      const genre = action.payload;

      if (genre === `All genres`) {
        filteredFilms = state.films;
      } else {
        filteredFilms = state.films.filter((film) => film.genre === genre);
      }
      return extend(state, {
        genre, filteredFilms
      });
  }

  return state;
};


export {reducer};
