import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.scss";
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
    return (axios.post('/auth/login', { email: email, password: password })
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
    <div className="login-body">
      <section className="login-form">
        <h1 className="login-heading">Sign in</h1>
        <form method="POST" onSubmit={logUser}>
          <div className="int-area">
            <input type="text" name="email" onChange={event => setEmail(event.target.value)} autoComplete="off" required />
            <label>E-mail</label>
          </div>
          <div className="int-area">
            <input type="password" name="password" onChange={event => setPassword(event.target.value)} autoComplete="off" required />
            <label>Password</label>
          </div>
          <div className="btn-area">
            <button type="submit">Sign in</button>
          </div>
          <div class="caption">
            Don't have an account? Register <a href="/register">here</a>
          </div>
        </form>
      </section>
    </div>

    // <div className="login-wrapper">
    //   <h1>Please Log In</h1>
    //   <form method="POST" onSubmit={logUser}>
    //     <label>
    //       <input type="text" name="email" onChange={event => setEmail(event.target.value)} placeholder="Email"/>
    //     </label>
    //     <label>
    //       <input type="password" name="password" onChange={event => setPassword(event.target.value)} placeholder="Password" />
    //     </label>
    //     <div>
    //       <button className="login-button" type="submit">Login</button>
    //     </div>
    //   </form>
    // </div>
  )
}


export default Login;