import React from "react";
import nhan from "../images/nhan.jpg";
import hong from "../images/hong.jpg";
import hars from "../images/hars.jpg";
import gitlogo from "../images/gitlogo.png";
import email from "../images/email.png";
import "./Landingpage.scss";
import landingbackground from "../images/landingbackground.mp4";
import tradingaboutus from "../images/tradingaboutus.png";
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Landingpage() {
  return (
    <div className="catchbackground">
        <video controls autoPlay loop muted>
        <source src={landingbackground} type="video/mp4"></source>
      </video>

      <header className="viewport-header">
        <h1>Stop reselling and buying new pairs </h1>
          <h2 className="landing-h2">Sign up for trading shoes</h2> 
          <div className="mb-2 pt-5">
            <Button variant="secondary" size="lg" href='/register'>
              Sign up
            </Button>{' '}
          </div>
       
      </header>

      <div className="scroll-us" id="scroll-about-us" ></div>
      <main>
        <article>
          <div className="about-us-description ">
            <div className="about-us-text">
              <h2>A Bag Full of Second Chances </h2>
              <span>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.</span>
            </div>
            <span className="about-image"><img src={tradingaboutus} alt="" width="800px" height="700x"/> 
            </span>
          </div>
        </article>

        <div>
         
          <div className="contact-us-description scroll-contact" id="scroll-contact-us">
            <div className="card">
              <img src={nhan} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nhan Tran</h5>
                <p className="card-text">Full-stack developer. CEO of this website.</p>
                <a href="https://github.com/nktrancs">
                <img src={gitlogo} alt="..." height="50x" width="50px" href="https://github.com/bhinder97" target="_blank"/>
                </a>
                <img src={email} alt="..." height="120x" width="120px"/>
              </div>
            </div>
            <div className="card">
              <img src={hong} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Hongseoup Yun</h5>
                <p className="card-text">Full-stack developer. CEO of this website.</p>
                <a href="https://github.com/Hongseoupyun">
                <img src={gitlogo} alt="..." height="50x" width="50px" href="https://github.com/bhinder97" target="_blank"/>
                </a>
                <img src={email} alt="..." height="120x" width="120px"/>
              </div>
            </div>
            <div className="card">
              <img src={hars} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Harsimranjeet Bhinder</h5>
                <p className="card-text">Full-stack developer. CEO of this website.</p>
                <a href="https://github.com/bhinder97">
                <img src={gitlogo} alt="..." height="50x" width="50px" href="https://github.com/bhinder97" target="_blank"/>
                </a>
                <img src={email} alt="..." height="120x" width="120px"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landingpage;
