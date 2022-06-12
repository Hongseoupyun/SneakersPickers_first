import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.scss";

function login() {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <input type="text" placeholder="Username"/>
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}


export default login;