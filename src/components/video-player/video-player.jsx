import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: props.isPlaying,
      isMuting: false,
    };
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;

    video.src = src;

    video.muted = this.setState({isMuting: true});

    video.poster = poster;

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.onplay = null;
  }

  render() {
    const {isMuting} = this.state;
    const video = this._videoRef.current;

    return (
      <div className="small-movie-card__image"
        onMouseOver={() => setTimeout(
            () => this.setState({isPlaying: !this.state.isPlaying}), 1000)
        }
        onMouseOut={() => video.load()}
      >
        <video width="280" height="175"
          ref={this._videoRef}
          controls
          muted={isMuting}
        />
      </div>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
