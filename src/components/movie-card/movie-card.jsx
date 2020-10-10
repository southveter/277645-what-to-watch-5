import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
    const {handleCardHover, film} = props;
    const {title, imgPreview} = film;
    return (
        <article className="small-movie-card catalog__movies-card"
            onMouseOver = {() => handleCardHover(film)}
        >
            <div className="small-movie-card__image">
                <img src={imgPreview} alt={title} width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
                <Link className="small-movie-card__link" to="/films/:id">{title}</Link>
            </h3>
        </article>)
};

export default MovieCard;

MovieCard.propTypes = {
    handleCardHover: PropTypes.func.isRequired,
    film: PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgPreview: PropTypes.string.isRequired,
    }).isRequired,
  };
