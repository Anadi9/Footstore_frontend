import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import AuthOptions from './AuthOptions';

function NavBar(props) {
    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand><Link to="/">Footstore</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <AuthOptions/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
}

export default NavBar;