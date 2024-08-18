// src/components/About/About.js
import React from 'react';
import './About.css';
import profileImg from '../../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profileImg} alt="Profile" className="about-profile-img" />
        <div className="about-text">
          <p>
            I'm currently studying Engineering at BBDITM.<br /> 
            I'm passionate about building innovative solutions using the latest technologies.
          </p>
      
           <a href="/resume.pdf" className="btn" download>Download Resume</a>  
        </div>
      </div>
    </section>
  );
}

export default About;
