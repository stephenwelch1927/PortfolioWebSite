import React from "react";
import Ayutthaya from "../images/Ayutthaya.jpg";
import Salthill from "../images/Salthill_Winter1.jpg";
import RoofTop from "../images/roofTop2.jpg";
import "./styles/HomePage.css";
import "./styles/NavLayout.css";

const HomePage = () => {
  return (
    <div>
      <h1 className="h1-style">Stephen Welch Web Development</h1>
      <div id="frame">
        <div id="main_image">
          <img
            style={{ height: "600px", width: "1900px" }}
            src={Salthill}
            alt="Salthill"
          />
        </div>
        <div id="overlay-pos">
          <img id="overlay_image" src={Ayutthaya} alt="Ayutthaya" />
        </div>
        <br></br>
      </div>
      <div id="h1m">
        <h1>Welcome to my Portfolio Site!</h1>
      </div>
    </div>
  );
};

export default HomePage;
