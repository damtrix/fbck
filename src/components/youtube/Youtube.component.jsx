import React, { Component } from 'react'
import YouTube from 'react-youtube'
 
class MyYouTube extends Component {
videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    }
    
  render() {
    const opts = {
      height: '200',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    const {videoId} = this.props
    return <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />;
  }

}

export default MyYouTube