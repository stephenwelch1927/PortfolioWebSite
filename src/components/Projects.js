import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Holiday from '../images/holiday1.png';
import './styles/Projects.css';

const Projects = () => {
    return(
        <div>
            <h1 className="h1">Projects</h1>
            <Carousel className="carousel-size"  data-bs-theme="dark">
        <Carousel.Item>
          <img className="carousel"  src={Holiday} alt="Holiday Website" />
          <Carousel.Caption className="carousel" >
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
}

export default Projects;