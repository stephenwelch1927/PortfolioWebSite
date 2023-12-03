import React from "react";
import'./styles/Recipe.css';
import Food1 from '../images/food1.png';
import Food2 from '../images/food2.png';
import Food3 from '../images/food3.png';
import {IoLogoAngular} from 'react-icons/io';
import {SiIonic} from 'react-icons/si';
import { BsGithub } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Recipe = () => {
  return (
    <div>
      <h1 className="h1-style">Recipe Application</h1>
      <NavLink to='/projects' activeStyle>
      <FaArrowCircleLeft className="backArrow"></FaArrowCircleLeft>
      </NavLink>
          <Card style={{ width: '75rem' }} class="p-3 mb-2 bg-secondary">
      <Card.Body>
        <Card.Title>A Mobile Recipe Application</Card.Title>
        <Card.Text>
        <br></br>
       
       This mobile application was created as part of our introduction to
       new technologies. The technologies we used are Angular and Ionic
       for mobile application development. This project is a front end 
       project, it is user friendly with mobile users. It allows users to
       browse recipes and also to add their own personal ones. We achieved
       creating our application through using Angualr, Ionic, GitHub & an 
       intoruction into typescript.
      </Card.Text>
      <br></br>
      <br></br>
        <Card.Link className="git-source-code" href="https://github.com/stephenwelch1927/Mobile_Application_Ionic_Project"><BsGithub size={30}></BsGithub> Git Hub Source Code </Card.Link>
      </Card.Body>
    </Card>
      <br></br>
      <br></br>
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
    
    </div>
  );
};

export default Recipe;