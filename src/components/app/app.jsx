import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {title, genre, yearRelease} = props;
  return (
    <Main
      title={title}
      genre={genre}
      yearRelease={yearRelease}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  yearRelease: PropTypes.number.isRequired,
};

export default App;
