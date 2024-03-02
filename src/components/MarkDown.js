import React from "react";
import "./styles/GlobalBeer.css";
import Card from "react-bootstrap/Card";
import { FaReact } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MarkDown = () => {
  return (
    <div>
      <NavLink to="/projects" activeStyle>
        <FaArrowCircleLeft className="backArrow"></FaArrowCircleLeft>
      </NavLink>

      <h1 className="h1-style">Markdown Previewer</h1>
      <Card style={{ width: "75rem" }} class="p-3 mb-2 bg-secondary">
        <Card.Body>
          <Card.Title>A Simple Markdown Previewer</Card.Title>
          <Card.Text>
            <br></br>
            An application created so that the user, can automatically input
            text and it will update to markdown in the second panel. The tech we
            used was React to complete this and also using Git & GitHub as our
            version control software.
          </Card.Text>
          <br></br>
          <br></br>
          <div className="frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LSR8gjORzaA?si=7q7qzFgp-l2PqbbU"
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
            href="https://github.com/stephenwelch1927/Markdown-Previewer"
          >
            <BsGithub size={30}></BsGithub> Git Hub Source Code
          </Card.Link>
          <br></br>
          <br></br>
          <Card.Link
            className="git-source-code"
            href="https://markdown-previewer-swelchdev.netlify.app/"
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

export default MarkDown;
