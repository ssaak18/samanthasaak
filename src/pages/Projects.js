import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import ProjectCard from '../components/ProjectCard';

const Projects = () => (
    <section className="container mx-auto p-8">
      <div 
        style={{ 
          backgroundColor: "#2e4d1a", 
        }} 
        className="p-6 rounded-lg shadow-md"
      >
        <h2 className="text-3xl text-center font-bold mb-4 m-1 text-white">  Projects</h2>
      </div>

      <div className="flex flex-row min-h-screen justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example project cards. Replace with dynamic data */}
        <ProjectCard 
          title="Voice Interface for Assistive Robots" 
          image="/images/projects/nerc.png" 
          description="I developed a novel Amazon Alexa interface with a mobile-manipulator robot for 
          increased accessibility in human-robot interactions. My project presents a case study for
           using Virtual Assistants as accessible user interfaces for home assistance robots. 
           It successfully demonstrates how Amazon's Alexa can be used as a voice interface 
           for a robot to perform command grouping tasks based on user input. 
           The project utilizes the Alexa Skills Kit to process Alexa interactions, 
           ROS to communicate with the robot, and Flask to develop the web interface. 
           My work was accepted for presentation at the New England Robotics Colloquium 
           (NERC) for Fall 2024. " 
          link="https://via.placeholder.com/300" 
        />
        <ProjectCard 
          title="Evolving Artificial Life Simulator" 
          image="/images/projects/critters.png" 
          description="I worked in a group of four to develop a simulator for evolving artificial life. 
          I developed a backend parser to handle custom language programs and a graphical user 
          interface that enables users to take control of individual specimens as they move, eat, 
          reproduce, and evolve. I worked mainly on the backend data structures for parsing and 
          interpreting the custom language program, the efficiency of the GUI and user interactions,
           and the overall organization of my team. " 
        />
        <ProjectCard 
          title="FRC Software Development" 
          image="https://via.placeholder.com/300" 
          description="A brief description of the project." 
        />
        <ProjectCard 
          title="Portfolio Website" 
          image="/images/projects/website.png" 
          description="Created as a way to display projects, this website is an on going project!" 
          link="https://via.placeholder.com/300" 
        />
        <ProjectCard 
          title="Photo Editor & Auction Game" 
          image="/images/projects/dog.png" 
          description="I created a photo editor game in Java where users can edit their photographs 
          with classic photo editing tools, such as tint or pixelate, and then sell their work 
          in a auction-style game." 
        />
      </div>
    </section>
  );

export default Projects;