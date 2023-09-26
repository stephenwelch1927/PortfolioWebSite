import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Linked,
  GitHub,
  Mail,

} from './Navbar/NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/education' activeStyle>
            Education
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <a href='https://www.linkedin.com/in/stephen-welch-web-developer'><Linked></Linked></a>
          <a href='https://github.com/stephenwelch1927'><GitHub></GitHub></a>
          <NavLink to='/contact'>
            <Mail></Mail>
          </NavLink>
        </NavMenu>
       

        
    
      </Nav>
    </>
  );
};
  
export default Navbar;