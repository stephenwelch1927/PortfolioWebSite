import React from "react";
import "./styles/GlobalBeer.css";
import Card from 'react-bootstrap/Card';
import Global2 from "../images/globalBeer2.png";
import Global3 from "../images/globalBeer3.png";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import {FaHandHolding} from 'react-icons/fa';
import Global4 from "../images/globalBeer4.png";
import Global5 from "../images/globalBeer5.png";
import Global6 from "../images/globalBeer6.png";
import Global7 from "../images/globalBeer7.png";

const GlobalBeerSite = () => {
  return (
    <div>
       <h1 className="h1-style">Global Beer Website</h1>
          <Card style={{ width: '75rem' }}>
      <Card.Body>
        <Card.Title>Global Beer</Card.Title>
        <Card.Text>
        <br></br>
        This website was created for the purpose of storing and updating
        beer stock and allowing the customer to make purchases. The site
        has many different features that include a sign-in form, admin
        section that would allow the user to use the site for an admin
        point of view. The site has full CRUD capabilities, the data is
        then stored in the database where we can access and update the
        database. This site has both a Front End and Back End, we use
        React JavaScript for our Front End and for our server we use
        NodeJs. We achieved our outcome using the MERN stack tech.
        </Card.Text>
        <div className="flex-container">
        <img className="img1" src={Global4} alt="World Beers" />
        <img className="img1" src={Global2} alt="World Beers" />
        <img className="img1" src={Global3} alt="World Beers" />
      </div>
      <br></br>
      <div className="flex-container">
        <img className="img1" src={Global5} alt="Check out" />
        <img className="img1" src={Global6} alt="Database" />
        <img className="img1" src={Global7} alt="Home Page" />
      </div>
      <br></br>
        <Card.Link className="git-source-code" href="https://github.com/Walter64/Professional-Practice-Project"><BsGithub size={30}></BsGithub> Git Hub Source Code </Card.Link>
      </Card.Body>
    </Card>

      <h2 className="h2-style">Technologies Used</h2>
      <h3 className="icon">
        <FaReact size={70}></FaReact> React
      </h3>
      <h3 className="icon">
        <DiNodejs size={70}></DiNodejs> NodeJs
      </h3>
      <h3 className="icon">
        <SiMongodb size={70}></SiMongodb> MongoDB
      </h3>
      <h3 className="icon">
        <BsGithub size={70}></BsGithub> GitHub
      </h3>
      <br></br>
    </div>
  );
};

export default GlobalBeerSite;
