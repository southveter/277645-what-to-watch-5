import React from "react";
import PropTypes from "prop-types";

const ShowMore = (props) => {
  const {onShowMoreClick, isShowMore} = props;
  return (
    isShowMore ? (
      <div className="catalog__more">
        <button onClick = {onShowMoreClick} className="catalog__button" type="button">Show more</button>
      </div>
    ) : null
  );
};
ShowMore.propTypes = {
  isShowMore: PropTypes.bool.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};
export default ShowMore;
