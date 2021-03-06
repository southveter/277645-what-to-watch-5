import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {handleCardHover, film, renderPlayer, handleCardOut} = props;
  const {title, imgPoster, video} = film;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => handleCardHover(film)}
      onMouseOut={handleCardOut}
    >
      {renderPlayer(video, imgPoster)}
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>{title}</Link>
      </h3>
    </article>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  handleCardHover: PropTypes.func.isRequired,
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgPoster: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  handleCardOut: PropTypes.func.isRequired,
};
