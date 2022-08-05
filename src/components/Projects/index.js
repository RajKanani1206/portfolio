import React from "react";
import { Container } from "react-bootstrap";
import projectDetails from "./projectDetails";
import "./style.css";

const Projects = () => {
  return (
    <div className="project-section  text-black my-5" id="projects">
      <h1 className="heading text-center mb-5">My Work</h1>
      <Container>
        {projectDetails.map((project, index) => (
          <div className={`project-content project-bg-img-${index + 1}`} key={index}>
            <div className="project-mask"></div>
            <div className="project-text">
              <h3>{project.title}</h3>
              <h5>{project.subTitle}</h5>
              <div className="project-links mt-3">
                <ul className="list-unstyled">
                  <li className="d-inline-block px-1">
                    <a href={project.webLink} target="_blank" rel="noreferrer">
                      <img src="images/icon-web.svg" alt="icon" height={40} width={40} />
                    </a>
                  </li>
                  <li className="d-inline-block px-1">
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      <img src="images/icon-github.svg" alt="icon" height={40} width={40} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
