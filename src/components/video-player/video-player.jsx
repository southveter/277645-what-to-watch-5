import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isMuting: false,
    };
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;

    video.src = src;

    video.muted = this.setState({isMuting: true});

    video.poster = poster;
  }

  componentWillUnmount() {

  }

  render() {
    const {isMuting} = this.state;
    const video = this._videoRef.current;

    return (
      <div className="small-movie-card__image"
      >
        <video width="280" height="175"
          ref={this._videoRef}
          muted={isMuting}
        />
      </div>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
