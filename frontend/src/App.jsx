import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
    </Router>
  )
}

export default App;