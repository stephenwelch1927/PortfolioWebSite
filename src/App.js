import React from "react";
import Navbar from "./components/HomePage";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from "react";
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Navbar/Contact";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import GlobalBeer from "./components/GlobalBeer";

function App() {
  useEffect(() => {
    document.body.classList.add('back-colour')
  }
  );
  return (
    <Router>
       <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path ='/globalBeer' component={GlobalBeer} />
      </Switch>
    </Router>
  );
}

export default App;
