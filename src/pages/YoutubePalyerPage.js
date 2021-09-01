import React, {  useEffect } from 'react';
import YoutubeVedio from '../components/YoutubeVedio.js';
import { useLocation , Redirect  } from "react-router-dom";
import Thumpnail from '../components/Thumpnail.js';




function YoutubePalyerPage (props){

  let location = useLocation();
  let id = "";
  let list;

  var elmntToView = document.getElementById(".123");




    id= location.state.id;
    list = location.state.videoList;
    console.log("list");
    console.log(list);

    function handelClick0(){

      elmntToView.scrollIntoView();
      console.log("handelClick0handelClick0");
    }

    return(
      <div>
      <div id="youtubeVedio">  <YoutubeVedio videoId={id}   videoList ={list}  /></div>


  {list.map((item) => {

 return (

      <Thumpnail onClick = {handelClick0}  key={item.id} id={item.id}  thumpanil={item.thumbnailUrl} title= {item.title} videoList ={list}  isItInPlayPage = {true}/>



  );
  })}




      </div>);


}


export default YoutubePalyerPage;
