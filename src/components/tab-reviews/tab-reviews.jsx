import React from "react";
import PropTypes from "prop-types";

const TabReviews = (props) => {
  const {film} = props;
  const {reviews} = film;

  const renderReviews = () => {
    const reviewsMarkup = [];
    for (let i = 0; i < reviews.length; i += 3) {
      const markup = <div className="movie-card__reviews-col" key={`${i}`}>
        {reviews.slice(i, i + 3).map((review) => (
          <div className="review" key={`${i}-${review.text}`}>
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>
              <footer className="review__details">
                <cite className="review__author">{review.name}</cite>
                <time className="review__date" dateTime={review.date}>{review.date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.ratingScore}</div>
          </div>))}
      </div>;
      reviewsMarkup.push(markup);
    }
    return reviewsMarkup;
  };

  return <div className="movie-card__reviews movie-card__row">
    {renderReviews()}
  </div>;
};

export default TabReviews;

TabReviews.propTypes = {
  film: PropTypes.shape({
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
  }),
};
