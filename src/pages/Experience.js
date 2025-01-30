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
        "Developed a novel Amazon Alexa interface using Amazon Web Services (AWS) and a Python backend for increased user accessibility with an integrated mobile manipulator robot", 
        "Utilized Robot Operating System (ROS) and a custom robot API to design custom command groupings and integrate with the open-source robot code",
        "Demonstrated proof-of-concept for executing intricate robot commands based on nuanced client dialogues with virtual assistants",
        "Accepted for presentation at the New England Robotics Colloquium (NERC) for Fall 2024",
      ]
    },
    {
      jobTitle: "Summer Fellow",
      orgName: "Solgud Robotics",
      date: "Summer 2023",
      details: [
        "Led customer outreach and communications for robotics and software startup to implement robots-as-a-service that automate restaurant operations; secured the highest number of demonstrations out of a team of 12"
      ]
    },
    {
      jobTitle: "Autopilot Team Member",
      orgName: "Cornell University Unmanned Air Systems (CUAir)",
      date: "2024 - Present",
      details: [
        "Member of the Autopilot software subteam working on autonomous software and ground control for an unmanned air vehicle competing in the California Unmanned Aerial Systems Competition",
        "Developing a scenerio based testing stratgey and simulation for an autonomous plane ground control station"
      ]
    },
    {
      jobTitle: "Chief Engineer",
      orgName: "FIRST Robotics",
      date: "2021 - 2024",
      details: [
        "Managed hardware and software subteams to develop and execute strategies for a 55-member team; organized and taught a new onboarding curriculum for 20 new members in mechanical, electrical, and software engineering skills",
        "Developed a robust autonomous routine to perform complex intake and shooting tasks with highly adaptable code for efficient brand-new auto routine generation",
        "Developed code for controlling a holonomic drivetrain using forward and inverse kinematics with PID",
        "Designed and fabricated the mechanism for an actuating arm with a flywheel shooter using CAD, built and designed electrical board with components and pneumatic systems"
      ]
    },
    {
      jobTitle: "Web Developer",
      orgName: "Cornell Entertainment Engineering & Design Club",
      date: "2024 - Present",
      details: [
        "Collaborate to design and implement a website from the ground up; worked on the homepage to make the website welcoming and intriguing for prospective students applying; supports outreach and organization for a 30-person club and promotes club vision",
      ]
    },
    {
      jobTitle: "Founder",
      orgName: "Yellow Book Box",
      date: "2020 - 2024",
      details: [
        "Created and managed a web-based book subscription service for young adults with the mission of growing a love of reading",
        "Developed and executed business, branding, and social media strategy; designed and coded website front-end"
      ]
    },
    // Add more experiences here
  ];

  return (
    <div className="container mx-auto p-8">
      <div 
        style={{ backgroundColor: "#2e4d1a" }} 
        className="p-4 h-20 rounded-lg shadow-md flex items-center justify-center"
      >
        <h2 className="text-3xl text-center font-bold text-white">Experience</h2>
      </div>
      
      {/* Loop through experiences and render ExperienceCard */}
      <div className="space-y-2">
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