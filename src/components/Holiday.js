import React from "react";
import'./styles/Holiday.css';
import Holiday1 from '../images/holiday1.png';
import Holiday2 from '../images/holiday2.png';
import Holiday3 from '../images/holiday3.png';
import Holiday4 from '../images/holiday4.png';
import Holiday5 from '../images/holiday5.png';
import Holiday6 from '../images/holiday6.png';
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";


const Holiday = () => {
  return (
    <div>
      <h1 className="h1-style">Holiday Expereince</h1>
      <br></br>
      <p className="p">
        Created this website for the purpose of holiday makers being{" "}
      </p>
      <p className="p">
        able to review and update holiday expereinces. The site has full
      </p>
      <p className="p">
        CRUD capabilities, the user at any time can update or remove any of
      </p>
      <p className="p">
        their stories. We use the MERN stack to achieve these goals, as our
      </p>
      <p className="p">
        front end is using React as its main code and our server side uses
      </p>
      <p className="p">
        NodeJs. All our data is then stored in a cloud based database called
      </p>
      <p className="p">
        MongoDB when query and update the data when ever we need to.
      </p>
      <br></br>
      <div className="flex-container">
        <img className="img" src={Holiday1} alt="Holiday Home" />
        <img className="img" src={Holiday2} alt="Add Form" />
        <img className="img" src={Holiday3} alt="Review Page" />
      </div>
      <br></br>
      <div className="flex-container">
        <img className="img" src={Holiday4} alt="Contact" />
        <img className="img" src={Holiday5} alt="Database" />
        <img className="img" src={Holiday6} alt="Source Code" />
      </div>
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
      <h3 className="git-source-code">Git Hub Source Code <BsGithub size={30}></BsGithub> <a className="anchor" href="https://github.com/stephenwelch1927/Data_Representation_Project">Holiday Experience</a></h3>
    </div>
  );
};

export default Holiday;