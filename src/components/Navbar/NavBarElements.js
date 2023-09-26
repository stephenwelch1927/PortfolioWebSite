import {AiOutlineLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {HiOutlineMail} from 'react-icons/hi';
  
export const Nav = styled.nav`
  background: #DDD3D1;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const Linked = styled(AiOutlineLinkedin) `
    display: flex;    
    height: 75px;
    width: 75px; 
    color: blue;
    justify-content: space-between;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
      }  
    
    
`;

export const GitHub = styled(BsGithub)`
    display: flex;
    height: 75px;
    width: 60px;
    justify-content: space-between;  
    margin-left: 20px;
    color: black;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
      }
`;

export const Mail = styled(HiOutlineMail)`
    display: flex;
    height: 75px;
    width: 60px;
    margin: 20px;
    color: black;
    justify-content: space-between;  
    margin-left: 20px;
`;
  
export const NavLink = styled(Link)`
  font-size: 30px;
  color: #808080;
  display: flex;
  justify-content: space-between;  
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  } 
`;
  
export const Bars = styled(FaBars)`  
display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
  
export const NavBtnLink = styled(Link)`
  border-radius: 6px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;