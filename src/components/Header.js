import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


function Header() {
  let history = useHistory();
  const [isMouseOver , setMouseOver] = useState(false);


  function handelClick(){
    console.log("123333");


    history.push({
    pathname: '/',
    });

  }

  function handelMouseOver(){
  setMouseOver(true);
  }

  function handelMouseOut(){
    setMouseOver(false);

  }

  // https://i.ibb.co/NtQNBpF/home.png

  return (
    <header id = "header1">
      <h1 onClick = {handelClick}
      style= {{color: isMouseOver? "#edebeb" : "white"}}
      onMouseOver={handelMouseOver}
      onMouseOut= {handelMouseOut}
      >Kids Tube</h1>
      <img className="headerImge"


      src="https://i.ibb.co/NtQNBpF/home.png" alt=""

      onClick = {handelClick}
      onMouseOver={ e => e.currentTarget.src = "https://i.ibb.co/zXSRV69/home-1.png"}
      onMouseOut= {e => e.currentTarget.src ="https://i.ibb.co/NtQNBpF/home.png"}/>

    </header>
  );
}

export default Header;
