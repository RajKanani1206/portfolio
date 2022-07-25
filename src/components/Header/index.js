import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import "./style.css";

const Header = () => {
  return (
    <Navbar expand="md" variant="dark">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <img alt="Logo" src="images/logo-white.svg" width="60" height="60" className="d-inline-block logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className="menu-button" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton className="p-4">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className="text-black"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="mt-5 mt-md-0">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <a href="#a" className="text-decoration-none menu-items mx-4 my-3 my-md-0">
                About Me
              </a>
              <a href="#d" className="text-decoration-none menu-items mx-4 my-3 my-md-0">
                Skills
              </a>
              <a href="#d" className="text-decoration-none menu-items mx-4 my-3 my-md-0">
                My Work
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
