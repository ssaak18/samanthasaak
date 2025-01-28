import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

const About = () => (
  <section className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-gray-700">Hello! I'm a computer science student passionate about building applications and exploring new technologies.</p>
  </section>
);

export default About;