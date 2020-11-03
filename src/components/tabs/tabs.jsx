import React from "react";
import PropTypes from "prop-types";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

const TAB_NAMES = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: `Overview`,
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(evt, tab) {
    evt.preventDefault();
    this.setState({activeTab: tab});
  }

  _renderTabContent(tab) {
    const {film} = this.props;
    switch (tab) {
      case TAB_NAMES.DETAILS:
        return <TabDetails film={film} />;
      case TAB_NAMES.REVIEWS:
        return <TabReviews film={film} />;
      default:
        return <TabOverview film={film} />;
    }
  }

  render() {
    return <React.Fragment><nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={this.state.activeTab === TAB_NAMES.OVERVIEW ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={(e) => this._handleClick(e, TAB_NAMES.OVERVIEW)}>
          <a href="#" className="movie-nav__link">Overview</a>
        </li>
        <li className={this.state.activeTab === TAB_NAMES.DETAILS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={(e) => this._handleClick(e, TAB_NAMES.DETAILS)}>
          <a href="#" className="movie-nav__link">Details</a>
        </li>
        <li className={this.state.activeTab === TAB_NAMES.REVIEWS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={(e) => this._handleClick(e, TAB_NAMES.REVIEWS)}>
          <a href="#" className="movie-nav__link">Reviews</a>
        </li>
      </ul>
    </nav>
    {this._renderTabContent(this.state.activeTab)}
    </React.Fragment>;
  }
}

export default Tabs;

Tabs.propTypes = {
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
