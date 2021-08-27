import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom";

import YoutubePalyerPage from '../pages/YoutubePalyerPage.jsx';
import VideoListPage from '../pages/VideoListPage.jsx';
import HomePage from '../pages/HomePage.jsx';

import YoutubeVedio from './YoutubeVedio.jsx';
import Thumpnail from './Thumpnail.jsx';
import Header from "./Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';






function App(){



return(

  <div>
  <Route exact path ="/" component = {HomePage}/>

  <div className = "maenContener">
  <Route exact path ="/video_List" component = {VideoListPage}/>
  <Route exact path ="/play" component = {YoutubePalyerPage}/>

  </div>

  <Header/>

  </div>


);

}

export default App;
