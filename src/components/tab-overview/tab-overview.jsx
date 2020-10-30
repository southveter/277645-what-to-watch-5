import React from "react";
import PropTypes from "prop-types";

const TabOverview = (props) => {
  const {films} = props;
  const film = films[0];
  const {overview} = film;

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{overview.ratingScore}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{overview.ratingLevel}</span>
        <span className="movie-rating__count">{overview.ratingCount}</span>
      </p>
    </div>

    <div className="movie-card__text">
      {overview.description}
      <p className="movie-card__director"><strong>Director: {overview.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {overview.starring}</strong></p>
    </div>
  </React.Fragment>;
};

export default TabOverview;

TabOverview.propTypes = {
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
};
