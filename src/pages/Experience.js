import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

const Experience = () => (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <ul className="list-disc ml-6">
        <li className="mb-2">Intern at XYZ Company - Worked on front-end development using React.</li>
        <li className="mb-2">Research Assistant - Developed tools for analyzing large datasets.</li>
      </ul>
    </section>
  );

export default Experience;