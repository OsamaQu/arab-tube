import React from 'react';
import { useLocation , Redirect  } from "react-router-dom";
import Avatar from '../components/Avatar.jsx';
import Carousel from '../components/Carousel.jsx';
import MyYoutubChannel from '../MyYoutubChannel.js';






function HomePage (){
  return(
    <div>


    <Carousel/>

  {MyYoutubChannel.map((item) => {

   return (
     <div className= "noteDiv">
      <Avatar  key={item.id} imgUlr={item.imageUrl}  playlistUrl={item.playlistUrl}  playlistUrl={item.playlistUrl} name={item.name}      />
      </div>


    );

    })}


    </div>



  );





}


export default HomePage;
