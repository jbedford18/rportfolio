import React from 'react';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Navi() {

  return (
  <Container>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Justin Bedford</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#about">About Me</Nav.Link>
      <Nav.Link href="#pricing">Portfolio</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#resume">Resume</Nav.Link>
      <Nav.Link eventKey={2} href="#contact">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</Container>
  );
}

export default Navi;