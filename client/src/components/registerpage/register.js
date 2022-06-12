import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.scss"

function Register() {
  return (
    <div className="container">
      <form id="signup">
        <div className="header">
          <h3>Sign Up</h3>
          <p>You want to fill out this form</p>
        </div>
        <div className="sep"></div>
        <div className="inputs">
          <input type="username" placeholder="Username" />
          <input type="email" placeholder="Email" autofocus />
          <input type="password" placeholder="Password" />
          <div className="checkboxy">
            <input name="cecky" id="checky" value="1" type="checkbox" /><label className="terms">I accept the terms of use</label>
          </div>
          <button type="submit" className="register-button">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Register;