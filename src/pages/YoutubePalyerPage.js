import React from 'react';
import YoutubeVedio from '../components/YoutubeVedio.js';
import { useLocation , Redirect  } from "react-router-dom";



function YoutubePalyerPage (props){

  let location = useLocation();
  let id = "";

  try {
    id= location.state.id;

    return(
      <div>
  <YoutubeVedio  videoId={  id} />
      </div>);
} catch (error) {
  console.error(error);
  return(
<Redirect to="/" />);
}

}


export default YoutubePalyerPage;
