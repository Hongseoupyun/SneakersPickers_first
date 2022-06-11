import React from "react";
import logo from './images/shoes.png'
import './Landingpage.css'
import landingbackground from './images/landingbackground.mp4'

function Landingpage() {
  return (
    <div className="catchbackground">
      
      <source src="" type="video/mp4" />
        <article className="catchphrase">
        Tired of your old sneakers? 
        </article><br/>
        <article className="catchphrase2">
        Trade them for a new pair today!
        </article>

    </div>
  );
}

export default Landingpage;