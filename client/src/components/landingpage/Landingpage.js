import React from "react";
import "./Landingpage.scss";
import landingbackground from "../images/landingbackground.mp4";
import tradingaboutus from "../images/aboutus-img4.jpeg";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import contactUs from "../images/contact-us-img.png";

function Landingpage() {
  return (
    <div className="catchbackground">
      <video controls autoPlay loop muted>
        <source src={landingbackground} type="video/mp4"></source>
      </video>

      <header className="viewport-header">
        <h1>Stop reselling and buying new pairs </h1>
        <h2 className="landing-h2">Sign up for trading</h2>
        <div className="mb-2 pt-5">
          <Button className="home-button" variant="secondary" size="lg" href="/register">
            Sign up
          </Button>{" "}
        </div>
      </header>

      <div className="scroll-us" id="scroll-about-us"></div>
      <main>
        <article>
          <div className="about-us-description ">
            <div className="about-us-text">
              <h3 className="landingpage-h3">MAKE OFFERS NOW</h3>
              <h2>Stop reselling shoes, Trade them instead</h2>
              <span className="about-us-explanation">
                We know you have been reselling your shoes and browsing new pairs to buy. It is often tiresome to deal with the process. We will find you some other sneakerheads and let you simply trade with them.
              </span>
            </div>
            <span className="about-image">
              <img src={tradingaboutus} alt="" className="about-image" />
            </span>
          </div>
        </article>

        
          <div
            className="contact-us-description scroll-contact"
            id="scroll-contact-us"
          >
            <div >
              <img className="contact-us-img" src={contactUs}/>
            </div>
            <div>
              asofkjaodpjg
            </div>
          </div>
     
      </main>
    </div>
  );
}

export default Landingpage;
