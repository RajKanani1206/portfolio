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
              I am a Computer Science graduate student at Frankfurt University of Applied Sciences, expected to graduate
              in March 2025. As an experienced Full Stack Developer with a focus on frontend technologies, I specialise
              in React JS, Next.js, TypeScript, Node.js, SQL, and GraphQL.
            </p>
            <p className="font-monospace fst-italic">
              As a lifelong learner, I am currently immersed in the field of Data Science. Proficient in Python, NumPy,
              Pandas, Matplotlib and Seaborn, I am enthusiastic about leveraging data to derive meaningful insights and
              create impactful visualizations.
            </p>
            <p className="font-monospace fst-italic">
              If you're looking to blend frontend creativity with analytical depth, I'd love to meet with you and
              discuss how my skills might be of assistance.
            </p>
            <form method="get" action="Raj-Resume.pdf" target="_blank">
              <Button variant="plain-text" className="text-white border-0" type="submit">
                Resume
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
