// src/App.js
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';  // If you include a Skills section
import Contact from './Components/Contact/Contact';  // If you include a Contact section
import Footer from './Components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills /> {/* Uncomment if you have a Skills section */}
      <Contact /> {/* Uncomment if you have a Contact section */}
      <Footer />
      
    </div>
  );
}

export default App;
