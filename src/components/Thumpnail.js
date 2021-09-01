import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import YoutubeVedio from './YoutubeVedio.js';





function Thumpanil (props){
  let history = useHistory();
  const [isMouseOver , setMouseOver] = useState(false);




function handelClick(){

  if (props.isItInPlayPage){

    try {
      var element = document.getElementById("youtubeVedio");
      element.scrollIntoView();
    }
catch(err) {


}



  }




  history.push({
  pathname: '/play',
  state: { id: props.id,
    videoList: props.videoList


  }

  });

}


function handelMouseOver(){
setMouseOver(true);
}

function handelMouseOut(){
  setMouseOver(false);

}



  return(

    <div className="note"  onClick={handelClick}
    style= {{backgroundColor: isMouseOver? "#F5F5F5" : "white"}}
    onMouseOver={handelMouseOver}
    onMouseOut= {handelMouseOut} >
    <img    src={props.thumpanil} alt=""/>

    <h1 >{props.title}</h1>
    </div>);
}


export default Thumpanil;
