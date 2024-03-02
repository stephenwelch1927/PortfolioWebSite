import React from "react";
import "./styles/GlobalBeer.css";
import Card from "react-bootstrap/Card";
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const RandomQuote = () => {
  return (
    <div>
      <NavLink to="/projects" activeStyle>
        <FaArrowCircleLeft className="backArrow"></FaArrowCircleLeft>
      </NavLink>

      <h1 className="h1-style">Random Quote Generator</h1>
      <Card style={{ width: "75rem" }} class="p-3 mb-2 bg-secondary">
        <Card.Body>
          <Card.Title>Random Quote Generator</Card.Title>
          <Card.Text>
            <br></br>
            This application was created for the purpose of the user, being able
            to generate a random quote of the day. This was achieved by making
            an API call to a website that has many random quotes.
          </Card.Text>
          <br></br>
          <br></br>
          <div className="frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AURdltB_cWo?si=22pARjgtHBCZi8St"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          </div>
          <br></br>
          <br></br>
          <Card.Link
            className="git-source-code"
            href="https://github.com/stephenwelch1927/stephenwelch1927.github.io"
          >
            <BsGithub size={30}></BsGithub> Git Hub Source Code
         
          </Card.Link>
          <br></br>
          <br></br>
          <Card.Link
            className="git-source-code"
            href="https://main--random-quote-gensw.netlify.app/"
          >
            <FaGlobe size={30}></FaGlobe> Web Page
          </Card.Link>
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

export default RandomQuote;
