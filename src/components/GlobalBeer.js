import React from "react";
import './styles/GlobalBeer.css';
import Global2 from '../images/globalBeer2.png';
import Global3 from '../images/globalBeer3.png';
import {FaReact} from 'react-icons/fa';
import {DiNodejs} from 'react-icons/di';
import {SiMongodb} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
import Global4 from '../images/globalBeer4.png';
const GlobalBeerSite = () => {
    return (
        <div>
            <h1 className="h1">Global Beer Website</h1>
            <br></br>
            <p className="p">This website was created for the purpose of storing and updating </p>
            <p className="p">beer stock and allowing the customer to make purchases. The site</p>
            <p className="p">has many different features that include a sign-in form, admin</p>
            <p className="p">section that would allow the user to use the site for an admin</p>
            <p className="p">point of view. The site has full CRUD capabilities, the data is</p>
            <p className="p">then stored in the database where we can access and update the</p>
            <p className="p">database.</p>
            <br></br>
            <div className="flex-container">
            <img className="img" src={Global4} alt="World Beers"/>
            <img className="img" src={Global2} alt="World Beers"/>
            <img className="img" src={Global3} alt="World Beers"/>
            </div>
            <h2 className="h2">Technologies Used</h2>
            <h3 className="icon"><FaReact size={70} ></FaReact> React</h3>
            <h3 className="icon"><DiNodejs size={70}></DiNodejs> NodeJs</h3>
            <h3 className="icon"><SiMongodb size={70}></SiMongodb> MongoDB</h3>
            <h3 className="icon"><BsGithub size={70}></BsGithub> GitHub</h3>
            
        </div>
    );
}

export default GlobalBeerSite;