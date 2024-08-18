// src/components/Skills/Skills.js
import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML', level: 'Intermediate' },
  { name: 'CSS', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Express.js', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
