import React from 'react';
import { Link } from "react-router-dom"
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navi = () => {

  return (
  <>
  <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to ='/'>Justin Bedford</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link as={Link} to ='/about'>About Me</Nav.Link>
      <Nav.Link as={Link} to ="/portfolio">Portfolio</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to ='/resume'>Resume</Nav.Link>
      <Nav.Link as={Link} to ='/contact'>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>

  );
}

export default Navi;