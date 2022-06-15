import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();



  
  function logUser(e) {
    e.preventDefault()
    console.log("submit fire")
    return(axios.post('/auth/login', {email:email, password:password})
    .then((result) => {
      console.log(result)
      setIsLoggedIn(true)
      localStorage.setItem('isLoggedIn', true);
    })
    .then(() => {
      window.open('/', "_self")
    })
    )
  }


 
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form method="POST" onSubmit={logUser}>
        <label>
          <input type="text" name="email" onChange={event => setEmail(event.target.value)} placeholder="Email"/>
        </label>
        <label>
          <input type="password" name="password" onChange={event => setPassword(event.target.value)} placeholder="Password" />
        </label>
        <div>
          <button className="login-button" type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}


export default Login;