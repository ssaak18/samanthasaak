import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import ProjectCard from '../components/ProjectCard';

const Projects = () => (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example project cards. Replace with dynamic data */}
        <ProjectCard 
          title="Project 1" 
          image="https://via.placeholder.com/300" 
          description="A brief description of the project." 
          link="#" 
        />
        <ProjectCard 
          title="Project 2" 
          image="https://via.placeholder.com/300" 
          description="A brief description of the project." 
          link="#" 
        />
      </div>
    </section>
  );

export default Projects;