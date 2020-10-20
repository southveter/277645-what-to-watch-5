import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";

const MovieCard = (props) => {
  const {handleCardHover, film} = props;
  const {title, imgPoster, video} = film;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => handleCardHover(film)}
    >
      <VideoPlayer
        isPlaying={false}
        src={video}
        poster={imgPoster}
      />
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/:id">{title}</Link>
      </h3>
    </article>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  handleCardHover: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgPoster: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
  }).isRequired,
};
