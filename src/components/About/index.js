import React from "react";
import { Button, Container } from "react-bootstrap";
import "./style.css";

const About = () => {
  return (
    <div className="about-section text-center text-black my-5" id="about">
      <h1 className="heading mb-5">About Me</h1>
      <Container>
        <div className="about-content d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className="col-left mb-4 mb-md-0">
            <img src="images/profile.jpg" alt="Profile" />
          </div>
          <div className="col-right text-start p-4 p-md-0">
            <p className="font-monospace fst-italic">
              I am a Software Developer specializing in Front-End who likes to build blazing fast websites. I love
              contributing to open source projects. I have worked mostly with ReactJS. Checkout my work below and feel
              free to get in touch with me if you have some interesting projects.
            </p>
            <Button variant="plain-text" className="text-white border-0">
              Resume
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
