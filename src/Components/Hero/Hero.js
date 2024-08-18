// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';
import Button from '../UI/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Deepak Pal</h1>
        <h3>An Aspiring Electronics and communication engineer.</h3>
        <Button text="Explore My Work" link="#projects" />
      </div>
    </section>
  );
}

export default Hero;
