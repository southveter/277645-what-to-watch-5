import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const SimilarFilmList = (props) => {
  const {films, genre} = props;

  const filteredFilms = films.filter((film) => film.genre === genre).slice(0, 4);

  return (
    <div className="catalog__movies-list">
      {filteredFilms.map((film, i) => (
        <article key={`${i}-${film.title}`} className="small-movie-card catalog__movies-card"
        >
          <div className="small-movie-card__image">
            <img src={film.imgPreview} alt={film.title} width="280" height="175" />
          </div>
          <h3 className="small-movie-card__title">
            <Link className="small-movie-card__link" to="/films/:id">{film.title}</Link>
          </h3>
        </article>
      ))}
    </div>);
};

export default SimilarFilmList;

SimilarFilmList.propTypes = {
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
};
