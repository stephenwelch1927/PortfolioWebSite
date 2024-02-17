import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Navbar/Contact";
import GlobalBeer from "./components/GlobalBeer";
import Holiday from "./components/Holiday";
import Recipe from "./components/Recipe";
import RegEx from "./components/RegEx";
import MarkDown from "./components/MarkDown";
import RandomQuote from "./components/RandomQuote";
import TextSimplifier from "./components/TextSimplifier";
import PortfolioWeb from "./components/PortfolioWeb";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  Linked,
  GitHub,
  Mail,
} from "./components/Navbar/NavBarElements";

function App() {
  useEffect(() => {
    document.body.classList.add("back-colour");
  });
  return (
    <div>
      <Router>
        <Nav>
          <Bars />

          <NavMenu id="navMenu">
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/projects" activeStyle>
              Projects
            </NavLink>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}

            <a href="https://www.linkedin.com/in/stephen-welch-web-developer">
              <Linked id="layout"></Linked>
            </a>
            <a href="https://github.com/stephenwelch1927">
              <GitHub></GitHub>
            </a>
            <NavLink to="/contact">
              <Mail></Mail>
            </NavLink>
          </NavMenu>
        </Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/globalBeer" element={<GlobalBeer />} />
          <Route exact path="/holiday" element={<Holiday />} />
          <Route exact path="/recipe" element={<Recipe />} />
          <Route exact path="/regEx" element={<RegEx />} />
          <Route exact path="/markDown" element={<MarkDown />} />
          <Route exact path="/randomQuote" element={<RandomQuote />} />
          <Route exact path="/textSimplifier" element={<TextSimplifier />} />
          <Route exact path="/portfolioWeb" element={<PortfolioWeb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
