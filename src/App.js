import React from "react";
import Navbar from "./components/Index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
    <Router>
       <Navbar />
      <BrowserRouter>
     
      </BrowserRouter>
    </Router>
  );
}

export default App;
