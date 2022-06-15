import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.scss"
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Register() {

  const [email, setEmail] = useState('');;
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();
  
  function registerUser(e) {
    e.preventDefault()
    console.log("submit fire")
    return(axios.post('/register', {email:email, password:password, name:name})
    .then((result) => {
      console.log("Successful registration", result)
    })
    .then(() => {
      navigate('/login')
    })
    )
  }


  return (
    <div className="container">
      <form method="POST" onSubmit={registerUser} id="signup">
        <div className="header">
          <h3>Sign Up</h3>
          <p>You want to fill out this form</p>
        </div>
        <div className="sep"></div>
        <div className="inputs">
          <input type="text" name="name" onChange={event => setName(event.target.value)} placeholder="Full name" />
          <input type="text" name="email" onChange={event => setEmail(event.target.value)} placeholder="Email"/>
          <input type="password" name="password" onChange={event => setPassword(event.target.value)} placeholder="Password" />
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