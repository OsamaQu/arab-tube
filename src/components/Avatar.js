import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSpring, animated } from 'react-spring'



function Avatar(props) {
  const springProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 },
     delay: 200});
     


  let history = useHistory();
  const [isMouseOver , setMouseOver] = useState(false);



function handelClick(){

  history.push({
  pathname: '/video_List',
    state: { playlistUrl: props.playlistUrl}
  });

}

function handelMouseOver(){
setMouseOver(true);
}

function handelMouseOut(){
  setMouseOver(false);

}






  return (

     <div className="note2"  onClick = {handelClick}
       style= {{backgroundColor: isMouseOver? "#F5F5F5" : "white"}}
       onMouseOver={handelMouseOver}
       onMouseOut= {handelMouseOut} >


     <animated.div style={springProps}>
      <img   className="circle-img" src={props.imgUlr} alt="avatar_img" />
      <h1 >{props.name}</h1>
     </animated.div>


    </div>
  );




}

export default Avatar;
