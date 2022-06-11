import React from "react";
import logo from "./images/shoes.png";
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
          <span className="contact-us">Contact Us</span>
          <div className="contact-us-description">
          Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
          </div>
        </article>
      </main>
    </div>
  );
}

export default Landingpage;
