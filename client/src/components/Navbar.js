/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from './images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import './Navbar.css'

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar bg="dark blue" variant="dark" sticky="top" expand="lg" >
        <Navbar.Brand className="logoname" href="/">
          <img src={logo} width="100px" height="100x"/> {' '}
          <br></br>SneakersPickers
        </Navbar.Brand>

        <Nav className="barlink">
          <Nav.Link href="aboutus">About us</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
          <Nav.Link href="browse">Browse</Nav.Link>
          <NavDropdown title="My Account">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/offers">My offers</NavDropdown.Item>
            <NavDropdown.Item href="/mylistings">My listings</NavDropdown.Item>
            <NavDropdown.Item href="/addalisting">Add a listing</NavDropdown.Item>
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
   
  );
}

export default NavBar;