import React from 'react';
import Ayutthaya from '../images/Ayutthaya.jpg';
import Salthill from '../images/Salthill_Winter1.jpg';
import './styles/HomePage.css';
import './styles/NavLayout.css';
import ReactRoundedImage from 'react-rounded-image';
  
const HomePage = () => {
  return (
    <div>
      <h1 className="h1-style">Stephen Welch Web Development</h1>
      <div>
      <img src={Salthill} alt='Salthill' style={{height: "500px", width: "1900px" }} />
      </div>
      <div className='display'>
       <ReactRoundedImage image={Ayutthaya} 
        imageWidth="500"
        imageHeight="500"
        roundedColor="none"
       />
      </div>
        
      </div> 
  );
};
  
export default HomePage;