import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom";

import YoutubePalyerPage from '../pages/YoutubePalyerPage.js';
import VideoListPage from '../pages/VideoListPage.js';
import HomePage from '../pages/HomePage.js';

import YoutubeVedio from './YoutubeVedio.js';
import Thumpnail from './Thumpnail.js';
import Header from "./Header.js";
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
