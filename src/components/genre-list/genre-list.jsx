import React from "react";
import PropTypes from "prop-types";

const GenreList = (props) => {
  const {activeGenre, genres, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) =><li onClick = {() => onGenreClick(genre)} key={`genre-${i}`} className={activeGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}> <a href="#" className="catalog__genres-link">{genre}</a></li>)}
    </ul>
  );
};
GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreClick: PropTypes.func.isRequired,
};
export default GenreList;
