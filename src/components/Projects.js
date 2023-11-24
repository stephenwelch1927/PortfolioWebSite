import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Holiday from "../images/holiday1.png";
import Food from "../images/Food_and_Drink_Guide.png";
import "./styles/Projects.css";
import GlobalBeer from "../images/globalBeer1.png";
import FoodAndDrink from "../images/Food_and_Drink_Guide.png";
import RegEx from "../images/reExConv.png";
import TextSimplifier from "../images/textSimplifier.png";
import RandomQuote from "../images/randomQuote.png";
import MarkDown from "../images/markDown.png";
import { FaFaceSmile } from "react-icons/fa6";
import { GiThink } from "react-icons/gi";
import { PiCursorClickFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1 className="h1-style">Projects</h1>
      <br></br>
      <h2>
        Welcome to the project section please browse through <FaFaceSmile />
      </h2>
      <h2>
        If you should have any queries <GiThink />
      </h2>
      <h2>
        Please click the mail Icon <PiCursorClickFill />
      </h2>

      <Carousel className="carousel-size" data-bs-theme="dark">
        <Carousel.Item>
          <img className="carousel" src={Holiday} alt="Holiday Website" />
          <Carousel.Caption className="carousel"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel" src={GlobalBeer} alt="Global Beer" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel" src={FoodAndDrink} alt="Recipie Site" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel" src={RegEx} alt="RegEx Converter" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src={TextSimplifier}
            alt="Text Simplifier"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src={RandomQuote}
            alt="Random Quote Generator"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel" src={MarkDown} alt="Markdown" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex-container">
        <Card style={{ width: "35rem" }} className="img1">
          <Card.Img variant="top" src={GlobalBeer} />
          <Card.Body>
            <Card.Title>Global Beer Garden</Card.Title>
            <Card.Text>
              This website is a fully functional beer purchasing site, allows
              the customer to browse and purchase beers from across the globe.
            </Card.Text>
            <Link to="/globalBeer">
              <Button variant="secondary">Global Beer Garden</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "35rem" }} className="img1">
          <Card.Img variant="top" src={Holiday} />
          <Card.Body>
            <Card.Title>Holiday Experience</Card.Title>
            <Card.Text>
              Allows the user to update their holiday experiences, users can
              also read other users holiday experience reviews.
            </Card.Text>
            <Link to="/holiday">
              <Button variant="secondary">Holiday Experience</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="flex-container">
        <Card style={{ width: "35rem" }} className="img1">
          <Card.Img variant="top" src={Food} />
          <Card.Body>
            <br></br>
            <Card.Title>Recipe Mobile App</Card.Title>
            <Card.Text>
              This mobile app allows the users to browse and update recipes. The
              user will be able to read and post up their favourite recipes.
            </Card.Text>
            <Link to="/recipe">
              <Button variant="secondary">Recipe App</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
