import { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import socialItems from "../HomeBanner/socialItems";
import "./style.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="md" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <a href="#home">
            <img alt="Logo" src="images/logo-white.svg" width="60" height="60" className="d-inline-block logo-img" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className="menu-button" onClick={handleShow} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
          scroll={true}
          show={show}
          onHide={handleClose}
          restoreFocus={false}
        >
          <Offcanvas.Header closeButton closeVariant="white" className="p-4">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className="text-black"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="mt-5 mt-md-0">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <a href="#about" className="text-decoration-none menu-items mx-4 my-3 my-md-0" onClick={handleClose}>
                About Me
              </a>
              <a href="#skills" className="text-decoration-none menu-items mx-4 my-3 my-md-0" onClick={handleClose}>
                Skills
              </a>
              <a href="#projects" className="text-decoration-none menu-items mx-4 my-3 my-md-0" onClick={handleClose}>
                My Work
              </a>
              <div className="social-links d-md-none">
                <ul className="list-unstyled mx-4 mt-5">
                  {socialItems.map((item, index) => (
                    <li className="d-inline-block my-4 px-1" key={index}>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <img src={item.src} alt="icon" height={40} width={40} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
