import React from "react";
import "./styles/Holiday.css";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Holiday = () => {
  return (
    <div>
      <NavLink to="/projects" activeStyle>
        <FaArrowCircleLeft className="backArrow"></FaArrowCircleLeft>
      </NavLink>
      <h1 className="h1-style">Holiday Expereince</h1>
      <Card style={{ width: "75rem" }} class="p-3 mb-2 bg-secondary">
        <Card.Body>
          <Card.Title>A Website for Holiday Reviews</Card.Title>
          <Card.Text>
            <br></br>
            Created this website for the purpose of holiday makers being able to
            review and update holiday expereinces. The site has full CRUD
            capabilities, the user at any time can update or remove any of their
            stories. We use the MERN stack to achieve these goals, as our front
            end is using React as its main code and our server side uses NodeJs.
            All our data is then stored in a cloud based database called MongoDB
            when query and update the data when ever we need to.
          </Card.Text>
          <br></br>
          <br></br>
          <Card.Link
            className="git-source-code"
            href="https://github.com/stephenwelch1927/Data_Representation_Project"
          >
            <BsGithub size={30}></BsGithub> Git Hub Source Code{" "}
          </Card.Link>
        </Card.Body>
      </Card>
      <br></br>

      <br></br>
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

export default Holiday;
