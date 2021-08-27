import React, { useState, useEffect } from 'react';
import Thumpnail from '../components/Thumpnail.jsx';
// import Header from "../components/Header";
import YoutubePalyerPage from './YoutubePalyerPage.jsx';
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

     const {items}= jsonData;
     const moshaya=  items.map((item)=>{

     const{snippet}= item;
     const{thumbnails}=snippet;
     const {maxres={
   "url": "https://i.ytimg.com/vi/-jVgr_AnrRE/maxresdefault.jpg",
   "width": 1280,
   "height": 720
   }
   }=thumbnails;
   const {url ="https://i.ytimg.com/vi/-jVgr_AnrRE/maxresdefault.jpg"}=maxres;

     console.log(thumbnails);



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


return(

  <div>

  {itemObj.map((item) => {

 return (

    <Thumpnail  key={item.id} id={item.id}  thumpanil={item.thumbnailUrl} title= {item.title} />

  );
  })}


  </div>


);

}

export default VideoListPage;
