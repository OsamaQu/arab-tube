import React from "react";
import { useHistory } from "react-router-dom";


function Avatar(props) {

  let history = useHistory();



function handelClick(){

  history.push({
  pathname: '/video_List',
    state: { playlistUrl: props.playlistUrl}
  });

}




  return (

     <div className="note2"  onClick = {handelClick}>
     <img    className="circle-img" src={props.imgUlr} alt="avatar_img" />;

    <h1 >{props.name}</h1>
    </div>
  );




}

export default Avatar;
