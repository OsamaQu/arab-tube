import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";





function ControlledCarousel() {
  let history = useHistory();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function  handleDaniaaClick(){
    history.push({
    pathname: '/video_List',
      state: { playlistUrl: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PUtm3DGXkWqAUQZMHl97SVxA&key=AIzaSyBZCpOfe-s2Pa_SASOkCtVEvKxUy3eDYUs"
}
    });

  }

function  handleNastyaClick(){
    history.push({
    pathname: '/video_List',
      state: { playlistUrl:"https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PU3I1iohrGzxep0p8r1Osw3w&key=AIzaSyBZCpOfe-s2Pa_SASOkCtVEvKxUy3eDYUs"
}
    });

  }

function  handleMaxClick(){
    history.push({
    pathname: '/video_List',
      state: { playlistUrl: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PUcdwLMPsaU2ezNSJU1nFoBQ&key=AIzaSyBZCpOfe-s2Pa_SASOkCtVEvKxUy3eDYUs"
}
    });

  }

function  handleRayanClick(){
    history.push({
    pathname: '/video_List',
      state: { playlistUrl: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PUhGJGhZ9SOOHvBB0Y4DOO_w&key=AIzaSyBZCpOfe-s2Pa_SASOkCtVEvKxUy3eDYUs"
}
    });

  }

  return (
    <Carousel className = "Carousel" activeIndex={index} onSelect={handleSelect}>


    <Carousel.Item  onClick= {handleMaxClick}>
      <img
        className="d-block w-100"
        src="https://yt3.ggpht.com/15J5VYoT5WVczuF0mYD_gGYdUhqdIVgdBW4S0tij8xCMRsr8FLG6yLbWbTLyJBkD8JSe3x75ofw=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj"
        alt="Pinkfong Kids' Songs & Stories"
      />

    </Carousel.Item>
      <Carousel.Item  onClick= {handleNastyaClick}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/GdW90B7/channels4-banner-1.jpg"
          alt="Like Nastya - ستايسي"
        />

      </Carousel.Item>
      <Carousel.Item  onClick= {handleDaniaaClick}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/mXRdTXk/channels4-banner-2.jpg"
          alt="Dania and Roma - ديانا وروما"
        />


      </Carousel.Item>


      <Carousel.Item onClick= {handleRayanClick}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/M2Jr9pY/channels4-banner.jpg"
          alt="Rayan World - عالم ريان"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
