import React from "react";
import logo from './images/logo.png'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import './Navbar.css'

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar bg="dark blue" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand className="logoname">
          <img src={logo} width="100px" height="100x"/> {' '}
          <br></br>SneakersPickers
        </Navbar.Brand>

        <Nav className="barlink">
          <NavDropdown title="Profile">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/offers">My offers</NavDropdown.Item>
            <NavDropdown.Item href="/mylistings">My listings</NavDropdown.Item>
            <NavDropdown.Item href="/addalisting">Add a listing</NavDropdown.Item>
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
    // <ul>
    //   <li>
    //     <Link to="/login">Login</Link>
    //   </li>
    //   <li>
    //     <Link to="/profile">Profile</Link>
    //   </li>
    //   <li>
    //     <Link to="/onetab">Onetab</Link>
    //   </li>
    //   <li>
    //     <Link to="/myaccount">My Account</Link>
    //   </li>
    // </ul>
  );
}

export default NavBar;