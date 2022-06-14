import React, { useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate()

  function logout() {
    return(axios.post('/auth/logout')
      .then((result) => {
        console.log("logout successful")
        return navigate("/")
      })
     .catch((err) => {
      console.log(err)
    }))
  }

  useEffect(() => {
    logout()
  });

  return (
    <div className="container">
      Signing out!
    </div>
  )
}

export default Logout;