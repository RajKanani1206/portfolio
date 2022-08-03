import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import skillItems from "./skillItems";

const Skills = () => {
  return (
    <div className="skills-section py-5" id="skills">
      <h1 className="heading mb-5 text-center">Skills</h1>
      <Container>
        <div className="row">
          {skillItems.map((skill, index) => (
            <div className="col-md-6" key={index}>
              <div className="skill-item mb-4 p-5">
                <div className={`mb-4 skill-icon skill-icon-${index + 1}`}></div>
                <h4 className="text-uppercase">{skill.title}</h4>
                <p className="mb-0">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
