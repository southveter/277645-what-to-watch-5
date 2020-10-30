import React from "react";
import PropTypes from "prop-types";

const TabReview = (props) => {
  const {films} = props;
  const film = films[0];
  const {reviews} = film;
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {reviews.map((review, i) => (
        <div className="review" key={`${i}-${review.text}`}>
          <blockquote className="review__quote">
            <p className="review__text">{review.text}</p>

            <footer className="review__details">
              <cite className="review__author">{review.name}</cite>
              <time className="review__date" dateTime={review.date}>{review.date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{review.ratingScore}</div>
        </div>
      ))}
    </div>
  </div>;
};

export default TabReview;

TabReview.propTypes = {
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