import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const navbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#364C84', "margin-bottom": "50px" }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: '#FFFFFF' }}>CVpro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href="#home" style={{ color: '#000000',"background-color" : "#FFCA2C" }}>Support us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar;