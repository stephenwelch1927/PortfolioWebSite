import React from "react";
import "./styles/Holiday.css";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import { FaPython } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";

const RegEx = () => {
  return (
    <div>
      <NavLink to="/projects" activeStyle>
        <FaArrowCircleLeft className="backArrow"></FaArrowCircleLeft>
      </NavLink>
      <h1 className="h1-style">Regular Expression Parser</h1>
      <Card style={{ width: "75rem" }} class="p-3 mb-2 bg-secondary">
        <Card.Body>
          <Card.Title>A Regular Expression Parser</Card.Title>
          <Card.Text>
            <br></br>
              A regular expression parser created using Python, this is 
              a command line program. The user has 3 options to choose from,
              one option will allow the user to input a string. The second option
              will allow the user to then iput some letters to try to match the
              string. The third option will then allow you to exit the application.
          </Card.Text>
          <br></br>
          <br></br>
          <Card.Link
            className="git-source-code"
            href="https://github.com/stephenwelch1927/graph-theory-project"
          >
            <BsGithub size={30}></BsGithub> Git Hub Source Code{" "}
          </Card.Link>
        </Card.Body>
      </Card>
      <br></br>

      <br></br>
      <h2 className="h2-style">Technologies Used</h2>
      <h3 className="icon">
        <BsGithub size={70}></BsGithub> GitHub
      </h3>
      <br></br>
      <h3 className="icon">
        <FaPython size={70}></FaPython> Python
      </h3>
    </div>
  );
};

export default RegEx;
