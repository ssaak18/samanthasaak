import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

const ExperiencePage = () => {
  // Array of experiences
  const experiences = [
    {
      jobTitle: "Undergraduate Researcher",
      orgName: "University of Massachusetts Lowell Miner School of Computer & Information Sciences",
      date: "Summer 2024",
      details: [
        "Intern at XYZ Company - Worked on front-end development using React.",
        "Research Assistant - Developed tools for analyzing large datasets."
      ]
    },
    {
      jobTitle: "Software Developer Intern",
      orgName: "Tech Innovations Inc.",
      date: "Boston, MA",
      details: [
        "Collaborated with a team to develop a mobile app using React Native.",
        "Implemented UI improvements based on user feedback."
      ]
    },
    // Add more experiences here
  ];

  return (
    <div className="container mx-auto p-8">
      <div 
        style={{ 
          backgroundColor: "#385c28", 
        }} 
        className="p-6 rounded-lg shadow-md"
      >
        <h2 className="text-3xl text-center font-bold mb-4 m-1 text-white">  Experience</h2>
      </div>
      
      {/* Loop through experiences and render ExperienceCard */}
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            jobTitle={experience.jobTitle}
            orgName={experience.orgName}
            date={experience.date}
            details={experience.details}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;