import React from "react";
import nhan from "./images/nhan.jpg";
import hong from "./images/hong.jpg";
import hars from "./images/hars.jpg";
import gitlogo from "./images/gitlogo.png";
import email from "./images/email.png";
import "./Landingpage.scss";
import landingbackground from "./images/landingbackground.mp4";
import tradingaboutus from "./images/tradingaboutus.png";

function Landingpage() {
  return (
    <div className="catchbackground">
        <video controls autoPlay loop muted>
        <source src={landingbackground} type="video/mp4"></source>
      </video>

      <header className="viewport-header">
        <h1>
          Tired of your old sneakers?
          <span>Trade them for a new pair today!</span>
        </h1>
      </header>

      <div className="scroll-us" id="scroll-about-us" ></div>
      <main>
        <article>
          <span className="about-us">About Us</span>
          <div className="about-us-description ">
            <div className="about-us-text">
              <h2>A Bag Full of Second Chances </h2>
              <span>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.</span>
            </div>
            <span className="about-image"><img src={tradingaboutus} alt="" width="800px" height="700x"/> 
            </span>
          </div>
        </article>

        <article>
          <div className="scroll-contact" id="scroll-contact-us" ></div>
          <span className="contact-us">Contact Us</span>
          <div className="contact-us-description">
            <div class="card">
              <img src={nhan} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Nhan Tran</h5>
                <p class="card-text">Full-stack developer. CEO of this website.</p>
                <a href="https://github.com/nktrancs">
                <img src={gitlogo} alt="..." height="50x" width="50px" href="https://github.com/bhinder97" target="_blank"/>
                </a>
                <img src={email} alt="..." height="120x" width="120px"/>
              </div>
            </div>
            <div class="card">
              <img src={hong} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hongseoup Yun</h5>
                <p class="card-text">Full-stack developer. CEO of this website.</p>
                <a href="https://github.com/Hongseoupyun">
                <img src={gitlogo} alt="..." height="50x" width="50px" href="https://github.com/bhinder97" target="_blank"/>
                </a>
                <img src={email} alt="..." height="120x" width="120px"/>
              </div>
            </div>
            <div class="card">
              <img src={hars} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Harsimranjeet Bhinder</h5>
                <p class="card-text">Full-stack developer. CEO of this website.</p>
                <a href="https://github.com/bhinder97">
                <img src={gitlogo} alt="..." height="50x" width="50px" href="https://github.com/bhinder97" target="_blank"/>
                </a>
                <img src={email} alt="..." height="120x" width="120px"/>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Landingpage;
