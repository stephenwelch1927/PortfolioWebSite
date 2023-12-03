import React from "react";
import Navbar from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Navbar/Contact";
import GlobalBeer from "./components/GlobalBeer";
import Holiday from "./components/Holiday";
import Recipe from "./components/Recipe";
import RegEx from "./components/RegEx";

function App() {
  useEffect(() => {
    document.body.classList.add('back-colour')
  }
  );
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path='/about' element={About} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path ='/globalBeer' element={<GlobalBeer />} />
        <Route exact path ='/holiday' element={<Holiday />} />
        <Route exact path ='/recipe' element={<Recipe />} />
        <Route exact path ='/regEx' element={<RegEx />} />
      </Routes>
    </Router>
  );
}

export default App;
