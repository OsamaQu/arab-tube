import React, { useState, useEffect } from 'react';
import Thumpnail from '../components/Thumpnail.js';
// import Header from "../components/Header";
import YoutubePalyerPage from './YoutubePalyerPage.js';
import { Route, Link } from "react-router-dom";
import { useLocation , Redirect  } from "react-router-dom";






function VideoListPage(){

  const [itemObj, setitemObj] = useState([]);
  const [id, setID] = useState("");


  let location = useLocation();


  const url = location.state.playlistUrl;


useEffect(() => {
   fetch(url)
   .then(response => response.json())
   .then((jsonData) => {

     let {items}= jsonData;
     console.log(items);
     const items2 =shuffleArray(items);
     console.log(items2);

     const moshaya=  items2.map((item)=>{

     const{snippet}= item;
     const{thumbnails}=snippet;
     const {maxres={
   "url": "https://i.ytimg.com/vi/-jVgr_AnrRE/maxresdefault.jpg",
   "width": 1280,
   "height": 720
   }
   }=thumbnails;
   const {url ="https://i.ytimg.com/vi/-jVgr_AnrRE/maxresdefault.jpg"}=maxres;




       return({
       id :item.snippet.resourceId.videoId,
       title :item.snippet.title,
       description :item.snippet.description,
       thumbnailUrl : maxres.url
     }
   );
   });
   setitemObj(moshaya);


  })
   .catch((error) => {
     // handle your errors here
     console.error(error)
   })

}, []);


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;

}


return(

  <div className="videoListPage">

  {itemObj.map((item) => {

 return (

    <Thumpnail  key={item.id} id={item.id}  thumpanil={item.thumbnailUrl} title= {item.title} videoList ={itemObj}   isItInPlayPage = {false}/>

  );
  })}


  </div>


);

}

export default VideoListPage;
