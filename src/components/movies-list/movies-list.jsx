import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import ShowMore from "../show-more/show-more";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

const CARD_AMOUNT = {
  CARDS_TO_SHOW: 8,
  LOAD_CARDS: 8,
};

const MovieCardWrapped = withVideoPlayer(MovieCard);

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
      itemsToShow: CARD_AMOUNT.CARDS_TO_SHOW,
    };

    this._timerID = null;
    this._handleCardHover = this._handleCardHover.bind(this);
    this._handleCardOut = this._handleCardOut.bind(this);
    this._onShowMoreClick = this._onShowMoreClick.bind(this);
  }

  _onShowMoreClick() {
    this.setState({itemsToShow: this.state.itemsToShow + CARD_AMOUNT.LOAD_CARDS});

  }

  _handleCardHover(film) {
    this._timerID = setTimeout(() => {
      this.setState({activeCard: film});
    }, 1000);
  }

  _handleCardOut() {
    clearTimeout(this._timerID);
    this._timerID = null;
    this.setState({activeCard: null});
  }

  componentWillUnmount() {
    clearTimeout(this._timerID);
  }

  render() {
    const {films} = this.props;
    return (<React.Fragment>
      <div className="catalog__movies-list">
        {films.slice(0, this.state.itemsToShow).map((film, i) => (
          <MovieCardWrapped
            key={`${i}-${film.title}`}
            film={film}
            handleCardHover={this._handleCardHover}
            handleCardOut={this._handleCardOut}
            isPlaying = {this.state.activeCard === film}
          />
        ))}
      </div>
      <ShowMore
        onShowMoreClick={this._onShowMoreClick}
        isShowMore={films.length > this.state.itemsToShow}
      />
    </React.Fragment>
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
