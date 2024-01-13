import React from "react";
import "./styles/GlobalBeer.css";
import Card from 'react-bootstrap/Card';
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const PortfolioWeb = () => {
  return (
    <div>
      <NavLink to='/projects' activeStyle>
      <FaArrowCircleLeft className="backArrow"></FaArrowCircleLeft>
      </NavLink>
     
       
       <h1 className="h1-style">Portfolio Website</h1>
          <Card style={{ width: '75rem' }} class="p-3 mb-2 bg-secondary">
      <Card.Body>
        <Card.Title>Portfolio Website</Card.Title>
        <Card.Text>
        <br></br>
        The current portfolio website you are browsing, was also created by me.
        This site was created for the purpose of showcasing my projects, gives
        details of technologies used and youTube videos explaining what each site does.
        </Card.Text>
      <br></br>
      <br></br>
        <Card.Link className="git-source-code" href="https://github.com/stephenwelch1927/PortfolioWebSite"><BsGithub size={30}></BsGithub> Git Hub Source Code</Card.Link>
      </Card.Body>
    </Card>

      <h2 className="h2-style">Technologies Used</h2>
      <h3 className="icon">
        <FaReact size={70}></FaReact> React
      </h3>
      <h3 className="icon">
        <BsGithub size={70}></BsGithub> GitHub
      </h3>
      <br></br>

    </div>
  );
};

export default PortfolioWeb;