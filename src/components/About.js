import React from "react";
import "./styles/About.css";
import RoofTop from '../images/roofTop2.jpg';
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <h1 className="h1-style">About</h1>
      <diV>
        <div className="about">
          <p>
            Software Developer based in Bangkok Thailand, my main focus is web
            development. My Passion is creating web sites to benefit people and
            improve lives. I am currently teaching, I have taught Computer
            Science to students here in Thailand which was really rewarding. I
            taught them many concepts of web develpment and also the principles
            of Object Oriented Programming (OOP).
          </p>
          <p>
            I am currently looking for any work as regards to web development, I
            am open to any kind of permanent work or freelance opportunities
            please take a look at my <a href="/projects">Projects</a> and feel
            free to <a href="/contact">Contact</a> me. I am always interested in
            meeting like minded people, so don't be afraid to drop me a message.
          </p>
          <br></br>
          <br></br>
          <h1 className="skills">Skills</h1>
          <FaReact size={100}></FaReact>
          <BsGithub className="icon-spacing" size={100}></BsGithub>
          <br></br>
          <DiNodejs size={100}></DiNodejs>
          <br></br>
          <SiMongodb size={100}></SiMongodb>
        </div>
        <div className="pic_div">
          <img
          src={RoofTop}
          alt="Roof Top Pic"
          style={{width: "600px"}}
          ></img>

        </div>
      </diV>
    </div>
  );
};

export default About;
