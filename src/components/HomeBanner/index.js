import React from "react";
import { Container } from "react-bootstrap";
import socialItems from "./socialItems";
import "./style.css";

const Home = () => {
  return (
    <div className="main-banner" id="home">
      <img src="images/logo.svg" alt="Logo" className="banner-img" />
      <div className="inner-banner min-vh-100">
        <Container className="banner-container">
          <div className="d-flex justify-content-between align-items-center banner-section">
            <div className="banner-content">
              <h1>Raj Kanani</h1>
              <h5 className="font-monospace fst-italic">Software Developer</h5>
            </div>
            <div className="social-links d-none d-md-inline">
              <ul className="list-unstyled">
                {socialItems.map((item, index) => (
                  <li className="my-4" key={index}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <img src={item.src} alt="icon" height={40} width={40} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
