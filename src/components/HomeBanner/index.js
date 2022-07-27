import React from "react";
import { Container } from "react-bootstrap";
import socialItems from "./socialItems";
import "./style.css";

const Home = () => {
  return (
    <div className="inner-banner">
      <Container className="banner-container">
        <div className="d-flex justify-content-between align-items-center banner-section">
          <div className="banner-content">
            <h1>Raj Kanani</h1>
            <h5 className="font-monospace fst-italic">Software Developer</h5>
          </div>
          <div className="social-links">
            <ul className="list-unstyled">
              {socialItems.map((item, index) => (
                <li className="my-4">
                  <a href={item.link}>
                    <img src={item.src} alt="icon" height={40} width={40} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
