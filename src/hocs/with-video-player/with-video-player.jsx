import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import VideoPlayer from "../../components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {

      return <Component
        {...this.props}
        renderPlayer={(src, poster) => {
          return (
            <VideoPlayer
              src={src}
              poster={poster}
              isPlaying = {this.props.isPlaying}
            />
          );
        }}
      />;
    }
  }

  WithVideoPlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;

