import React from "react";
import "./styles/Holiday.css";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaJava } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";

const TextSimplifier = () => {
  return (
    <div>
      <NavLink to="/projects" activeStyle>
        <FaArrowCircleLeft className="backArrow"></FaArrowCircleLeft>
      </NavLink>
      <h1 className="h1-style">Text Simplifier</h1>
      <Card style={{ width: "75rem" }} class="p-3 mb-2 bg-secondary">
        <Card.Body>
          <Card.Title>A Text Simplifier</Card.Title>
          <Card.Text>
            <br></br>A text simplifier created using Java and its OOP
            principles, in this project we created classes and parsed some text.
            Then we were able to match the two files text together by using a
            simple menu.
          </Card.Text>
          <br></br>
          <br></br>
          <Card.Link
            className="git-source-code"
            href="https://github.com/stephenwelch1927/Data-Structures-Project---Text-Simplifier"
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
      <h3 className="icon2">
        <FaJava size={70}></FaJava> Java
      </h3>
    </div>
  );
};

export default TextSimplifier;
