import React from 'react';
import YouTube from 'react-youtube';



function YoutubeVedio (props){
  const opts = {
    height: '780',
    width: '1280',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  console.log("props.videoId");
  console.log(props.videoId);




  return(<YouTube videoId={props.videoId} opts={opts}  />);
}


export default YoutubeVedio;


// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PUPOw2O3_uZ1doro9iR4x6vw&key=AIzaSyBZCpOfe-s2Pa_SASOkCtVEvKxUy3eDYUs
