import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

ReactDOM.render(
    <App
      title={Settings.TITLE}
      genre={Settings.GENRE}
      yearRelease={Settings.YEAR} />,
    document.querySelector(`#root`)
);
