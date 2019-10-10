import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavMenu = () => (
  <Navbar collapseOnSelect expand="lg" className="navbar">
    <Navbar.Brand className="brand" href="#home">
      Sylphrena
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
  </Navbar>
);

export default NavMenu;
