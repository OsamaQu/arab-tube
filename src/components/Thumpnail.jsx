import React from 'react';
import { useHistory } from "react-router-dom";
import YoutubeVedio from './YoutubeVedio.jsx';





function Thumpanil (props){
  let history = useHistory();



function handelClick(){

  history.push({
  pathname: '/play',
    state: { id: props.id}
  });

}



  return(

    <div className="note">
    <img  onClick={handelClick}   src={props.thumpanil} alt=""/>

    <h1 >{props.title}</h1>
    </div>);
}


export default Thumpanil;
