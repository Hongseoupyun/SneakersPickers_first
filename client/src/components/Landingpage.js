import React from "react";
import logo from "./images/shoes.png";
import "./Landingpage.scss";
import landingbackground from "./images/landingbackground.mp4";

function Landingpage() {
  return (
    <div className="catchbackground">
        <video controls autoPlay loop muted>
        <source src={landingbackground} type="video/mp4"></source>
      </video>

      <header class="viewport-header">
        <h1>
          Tired of your old sneakers?
          <span>Trade them for a new pair today!</span>
        </h1>
      </header>

      <main class="aboutus">
        <span>About Us</span>
      </main>
    </div>
  );
}

export default Landingpage;
