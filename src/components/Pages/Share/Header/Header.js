import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="nav-bar-brand">S</span>
            <span className="nav-bar-brand">E</span>
            <span className="nav-bar-brand">L</span>
            <span className="nav-bar-brand">I</span>
            <span className="nav-bar-brand">M</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="header-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutme" className="header-link">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="header-link">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/skill" className="header-link">
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio" className="header-link">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="header-link">
                Contact
              </Nav.Link>
              <Nav.Link
                href="https://drive.google.com/file/d/1h92D858G6jF2Oaq5UPUPECQ3zNvRWkLc/view"
                target="_blank"
                rel="noreferrer"
                className="download-button text-white fw-bold"
              >
                Download Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
