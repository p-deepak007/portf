// src/components/Projects/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'A heart beat sensing device using audrino',
    techStack: 'c language, audrino',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'A Todo list web application',
    techStack: 'React, Node.js',
    link: 'https://github.com/p-deepak007/todo-list.git'
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
