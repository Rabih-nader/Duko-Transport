import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; // Use HashRouter

import Navbar from './components/Navbar'
import Home from './components/Home';
import AboutUs from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
