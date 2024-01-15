import React from "react";
import "./styles/GlobalBeer.css";
import Card from "react-bootstrap/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const GlobalBeerSite = () => {
  return (
    <div>
      <NavLink to="/projects" activeStyle>
        <FaArrowCircleLeft className="backArrow"></FaArrowCircleLeft>
      </NavLink>

      <h1 className="h1-style">Global Beer Website</h1>
      <Card style={{ width: "75rem" }} class="p-3 mb-2 bg-secondary">
        <Card.Body>
          <Card.Title>
            A Website for Purchasing Beers Across the Globe
          </Card.Title>
          <Card.Text>
            <br></br>
            This website was created for the purpose of storing and updating
            beer stock and allowing the customer to make purchases. The site has
            many different features that include a sign-in form, admin section
            that would allow the user to use the site for an admin point of
            view. The site has full CRUD capabilities, the data is then stored
            in the database where we can access and update the database. This
            site has both a Front End and Back End, we use React JavaScript for
            our Front End and for our server we use NodeJs. We achieved our
            outcome using the MERN stack tech.
          </Card.Text>
          <br></br>
          <br></br>
          <div className="frame">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XO02gnEq3-Y?si=goObEup3Q01nuPVR"
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
            href="https://github.com/Walter64/Professional-Practice-Project"
          >
            <BsGithub size={30}></BsGithub> Git Hub Source Code{" "}
          </Card.Link>
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
