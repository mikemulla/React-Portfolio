import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
const NavbarCompo = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="nav-section"
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"} className="links">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/project"} className="links">
                Project
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"} className="links">
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"} className="links">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCompo;
