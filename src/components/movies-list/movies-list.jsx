import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

const MovieCardWrapped = withVideoPlayer(MovieCard);

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };

    this._handleCardHover = this._handleCardHover.bind(this);
    this._handleCardOut = this._handleCardOut.bind(this);

  }

  _handleCardHover(film) {
    this.setState({activeCard: film});
  }

  _handleCardOut() {
    this.setState({activeCard: null});
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCardWrapped
            key={`${i}-${film.title}`}
            film={film}
            handleCardHover={this._handleCardHover}
            handleCardOut={this._handleCardOut}
            isPlaying = {this.state.activeCard === film}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
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

export default MoviesList;
