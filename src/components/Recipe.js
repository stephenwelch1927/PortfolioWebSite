import React from "react";
import'./styles/Recipe.css';
import Food1 from '../images/food1.png';
import Food2 from '../images/food2.png';
import Food3 from '../images/food3.png';
import {IoLogoAngular} from 'react-icons/io';
import {SiIonic} from 'react-icons/si';
import { BsGithub } from "react-icons/bs";


const Recipe = () => {
  return (
    <div>
      <h1 className="h1-style">Recipe Application</h1>
      <br></br>
      <p className="p">
       This mobile application was created as part of our introduction to
      </p>
      <p className="p">
        new technologies. The technologies we used are Angular and Ionic
      </p>
      <p className="p">
        for mobile application development. This project is a front end 
      </p>
      <p className="p">
        project, it is user friendly with mobile users. It allows users to
      </p>
      <p className="p">
        browse recipes and also to add their own personal ones. We achieved
      </p>
      <p className="p">
        creating our application through using Angualr, Ionic, GitHub & an 
      </p>
      <p className="p">
        intoruction into typescript.
      </p>
      <br></br>
      <div className="flex-container">
        <img className="img" src={Food1} alt="App Menu 1" />
        <img className="img" src={Food2} alt="App Menu 2" />
        <img className="img" src={Food3} alt="App Menu 3" />
      </div>
      <br></br>
      <h2 className="h2-style">Technologies Used</h2>
      <h3 className="icon-angular">
        <IoLogoAngular size={70}></IoLogoAngular> Angular
      </h3>
      <h3 className="icon-ionic">
        <SiIonic size={70}></SiIonic> Ionic
      </h3>
      <h3 className="icon">
        <BsGithub size={70}></BsGithub> GitHub
      </h3>
      <br></br>
      <h3 className="git-source-code">Git Hub Source Code <BsGithub size={30}></BsGithub> <a className="anchor" href="https://github.com/stephenwelch1927/Mobile_Application_Ionic_Project">Recipe App</a></h3>
    </div>
  );
};

export default Recipe;