import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import ProjectCard from '../components/ProjectCard';

const Projects = () => (
    <section className="container mx-auto p-8">
      <div 
        style={{ 
          backgroundColor: "#385c28", 
        }} 
        className="p-6 rounded-lg shadow-md"
      >
        <h2 className="text-3xl text-center font-bold mb-4 m-1 text-white">  Projects</h2>
      </div>

      <div className="flex flex-row min-h-screen justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example project cards. Replace with dynamic data */}
        <ProjectCard 
          title="Voice Interface for Assistive Robots" 
          image="https://via.placeholder.com/300" 
          description="A brief description of the project." 
          link="#" 
        />
        <ProjectCard 
          title="Evolving Artificial Life Simulator" 
          image="https://via.placeholder.com/300" 
          description="A brief description of the project." 
          link="#" 
        />
        <ProjectCard 
          title="FRC Software Development" 
          image="https://via.placeholder.com/300" 
          description="A brief description of the project." 
          link="#" 
        />
        <ProjectCard 
          title="Portfolio Website" 
          image="https://via.placeholder.com/300" 
          description="A brief description of the project." 
          link="#" 
        />
        <ProjectCard 
          title="Photo Editor Game" 
          image="https://via.placeholder.com/300" 
          description="A brief description of the project." 
          link="#" 
        />
      </div>
    </section>
  );

export default Projects;