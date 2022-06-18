/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import logo from './images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import { withCookies, Cookies } from 'react-cookie';
import './Navbar.css'
import axios from "axios";


function NavBar() {

  //renders navbar based on localstoragestate
  const LoggedIn = localStorage.getItem('isLoggedIn');
  // console.log(typeof LoggedIn)

  const [name, setName] = useState()


  //fetch data from api using axios
  const getUsersProfile = function () {
    return axios.get("api/profile")
      .then((result) => {
        setName(result.data.user_name)
      });
  };

  //load usersProfile when rendering component
  useEffect(() => {
    getUsersProfile();
  }, []);



  console.log(name)


  return (
      <Navbar className="pb-0 pt-0" bg="dark blue" variant="dark" fixed="top" expand="lg" >
        <Navbar.Brand className="logoname" href="/">
          <img src={logo} width="100px" height="80x"/> {' '}
          SneakersPickers 
          {LoggedIn !== "false" && (<div className="username">Welcome, {name}</div>)}
        </Navbar.Brand>

        <Nav className="ms-auto align-text-bottom mt-5">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#scroll-about-us">About us</Nav.Link>
          <Nav.Link href="/#scroll-contact-us">Contact</Nav.Link>
          <Nav.Link href="/browse">Browse</Nav.Link>
          {LoggedIn === "true"? (
            <NavDropdown title="My Profile">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/offers">My offers</NavDropdown.Item>
              <NavDropdown.Item href="/mylistings">My listings</NavDropdown.Item>
              <NavDropdown.Item href="/addalisting">Add a listing</NavDropdown.Item>
              <NavDropdown.Item onClick={ ()=> 
                {localStorage.setItem('isLoggedIn', false);  
                setName(null); 
                window.open('/', "_self")}
                }
                >Logout</NavDropdown.Item>
            </NavDropdown>
          )
          :
          (
          <>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </>
          )}

        </Nav>
      </Navbar>
  );
}

export default NavBar;