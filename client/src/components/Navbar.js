import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/onetab">Onetab</Link>
      </li>
    </ul>
  );
}

export default Navbar;