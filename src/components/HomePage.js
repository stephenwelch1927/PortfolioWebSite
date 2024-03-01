import React from "react";
import Salthill from "../images/Salthill_Winter1.jpg";
import "./styles/HomePage.css";
import "./styles/NavLayout.css";
import KeyboardIcon from '@mui/icons-material/Keyboard';

const HomePage = () => {
  return (
    <div id="main">
      <h1 className="h1-style">Stephen Welch Web Development</h1>

      <div id="main_image">
        <img
          style={{ height: "600px", width: "1899px" }}
          src={Salthill}
          alt="Salthill"
        />
      </div>
      <div id="h1m">
      <h1>Welcome to my Portfolio Site!</h1>
      </div>
      <br></br>
      <div id="h2">
      <p className="p2">Hello!</p>
      <p className="p3">My name is Stephen Welch</p>
      <p className="p3">I have a passion for Web Development!</p>
      <p className="p2">Please browse through my projects, hopefully
      I might be able to help you. My other passions in life include 
      sport, keeping fit, reading and listening to music. Please drop
      me a message!
      </p>
      </div>
      <div id="computer">
        <KeyboardIcon sx={{fontSize: 270}}/>
        </div>
        </div>
  
  );
};

export default HomePage;
