import React, { useState, useEffect } from 'react';
import { useLocation , Redirect  } from "react-router-dom";

import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";
import YoutubePalyerPage from '../pages/YoutubePalyerPage.js';
import VideoListPage from '../pages/VideoListPage.js';
import HomePage from '../pages/HomePage.js';

import YoutubeVedio from './YoutubeVedio.js';
import Thumpnail from './Thumpnail.js';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Ads from "./Ads.js";

import ScrollToTop from "../ScrollToTop.js";

import 'bootstrap/dist/css/bootstrap.min.css';






function App(){
  let location = useLocation();




return(

  <Router>
  <ScrollToTop/>
  <Route exact path ="/" component = {HomePage}/>
  <Route exact path ="/app-ads.txt" component = {Ads}/>

  <div className = "maenContener">
  <Route exact path ="/video_List" component = {VideoListPage}/>
  <Route exact path ="/play" component = {YoutubePalyerPage}/>

  </div>
     {
       location.pathname ==='/app-ads.txt' ? null:<Header/>
      }

      {
        location.pathname ==='/app-ads.txt' ? null:  <Footer/>
       }



  </Router>


);

}

export default App;
