import React from 'react';
import YouTube from 'react-youtube';



function YoutubeVedio (props){
  const opts = {
    height: '780',
    width: '1280',
    playerVars: {
      autoplay: 1,
    },
  };
  console.log("props.videoId");
  console.log(props.videoId);




  return(
    <YouTube className= "YouTubeItem" videoId={props.videoId} opts={opts}  />);
}


export default YoutubeVedio;
