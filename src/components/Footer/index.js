import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import socialItems from "../HomeBanner/socialItems";

const Footer = () => {
  return (
    <div className="footer-section py-5">
      <Container>
        <div className="text-center py-3">
          <img src="images/logo-white.svg" alt="Logo" height={70} width={70} />
        </div>
        <div className="d-flex justify-content-center my-4">
          {socialItems.map((item, index) => (
            <a href={item.link} key={index} className="text-decoration-none text-white mx-4 social-link">
              {item.name}
            </a>
          ))}
        </div>
        <div className="text-center text-white-50">
          Copyright &copy; {new Date().getFullYear()} | Made by Raj Kanani
        </div>
      </Container>
    </div>
  );
};

export default Footer;
