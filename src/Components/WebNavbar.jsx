import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import NavItem from 'react-bootstrap'

import "../styles/home.css"

function WebNavbar() {
  return (
    <div className='navbar'>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            {/* <img className="navbarImg" src="/images/NavbarLogo.gif" alt="Gif" /> */}
            <Navbar.Brand href="/">Taskforce: Whirlwind</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/progress">Our Progress</Nav.Link>
                <Nav.Link href="/developers">Meet the Developers</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
    
  )
}

export default WebNavbar