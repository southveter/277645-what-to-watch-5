import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import GenreList from "../genre-list/genre-list";
import {genreList} from "../../utils";

const Main = (props) => {
  const {films, genre, switchGenre, initialFilms} = props;
  const film = films[0];
  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList
          activeGenre={genre}
          genres={genreList(initialFilms)}
          onGenreClick = {switchGenre}
        />

        <MoviesList
          films={films}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>);
};

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    imgPreview: PropTypes.string.isRequired,
    imgPoster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    overview: PropTypes.shape({
      ratingScore: PropTypes.number.isRequired,
      ratingLevel: PropTypes.string.isRequired,
      ratingCount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired,
    }).isRequired,
    details: PropTypes.shape({
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired,
      runTime: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
    }).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      ratingScore: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  genre: PropTypes.string.isRequired,
  switchGenre: PropTypes.func.isRequired,
  initialFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    imgPreview: PropTypes.string.isRequired,
    imgPoster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    overview: PropTypes.shape({
      ratingScore: PropTypes.number.isRequired,
      ratingLevel: PropTypes.string.isRequired,
      ratingCount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired,
    }).isRequired,
    details: PropTypes.shape({
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired,
      runTime: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
    }).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      ratingScore: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};


const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.filteredFilms,
  initialFilms: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  switchGenre(genre) {
    dispatch(ActionCreator.switchGenre(genre));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
