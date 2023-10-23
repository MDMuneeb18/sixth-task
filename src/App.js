import React from "react";

const App = () => {
  const portfolioData = {
    name: "Mohammad Muneeb",
    reg: "21BCE9225",
    place: "Vijayawada, India",
    skills: [
      "Artifical Intelligence",
      "Machine learning",
      "App Development",
      "Web Development",
      "Programming",
      "Debate",
    ],
    projects: [
      {
        title: "OBJECT DETECTION | Detecting objects in real world",
        description:
          "With a commendable accuracy rate of approximately 84.5%, the project tries to identify the objects after successfully training the model with various Deep Learning models.",
      },
      {
        title: "FIRE FIGHTER ROBOT | Surveillance Car System",
        description:
          "A fire-fighting robot is a robot that is designed to assist firefighters in extinguishing fires. The robot can be controlled remotely and is equipped with a water tank and gun for extinguishing fires. The robot uses sensors to detect the fire and move towards it. The project is built using Arduino and Raspberry pi devices.",
      },
      {
        title: "JAM DETECTOR | Robotic Earthquake Management System",
        description:
          "Utilising a Raspberry Pi, heat sensors, and the YOLO (You Only Look Once) algorithm, create an advanced robotic earthquake management system under the guidance of a Professor. By automating damage assessment and earthquake rescue efforts, this creative system seeks to improve disaster response.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2>
            <u>REGISTRATION NUMBER:</u> {portfolioData.reg}
          </h2>
          <h2>
            <u>PLACE:</u> {portfolioData.place}
          </h2>
        </div>
        <div className="body">
          <div className="about">
            <h3>
              <u>ABOUT ME</u>
            </h3>
            <p>
              I'm a third-year student at Vellore Institute of Technology
              majoring in computer science. I have a solid background in
              software development and computer science as a BTech student.
              Artificial intelligence, machine learning, web development, and
              are just a few of the tech-related topics that I find fascinating.
              Right now, I'm working as an intern in the software development
              industry, where I'm developing my talents and getting real-world
              experience. I'm enthusiastic about how technology is advancing and
              how it will continue to influence our future.
            </p>
          </div>
          <div className="skills">
            <h3>
              <u>SKILLS</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3>
              <u>PROJECTS</u>
            </h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
