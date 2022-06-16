import React from "react";
import "./Offers.scss"
import tradeImg from "../images/trade-sample.webp"
import myShoesImg from "../images/mylisting-img-sample.webp"
import othersShoesImg from "../images/mylisting-img-sample.webp"

export default function Offers() {
  return (
    <body className="offers-body">
      <section className="offers-container">
        <div className="from">
          From username
        </div>
        <article className="offers-cards">
          <div className="my-shoes-card">
            {/* <div>
              <img className="my-shoes-img" src={myShoesImg}/>
            </div> */}
            <div className="my-shoes-name">
              name
            </div>
            <div className="my-shoes-size">
              size
            </div>
            <div className="my-shoes-description">
              description
            </div>
          </div>
          <div className="trade-img">
            <img src={tradeImg}/>
          </div>
          <div className="others-shoes-card">
            <div>
              <img className="others-shoes-img"src={othersShoesImg} />
            </div>
            <div className="others-shoes-name">
              name
            </div>
            <div className="others-shoes-size">
              size
            </div>
            <div className="others-shoes-description">
              description
            </div>
          </div>
        </article>
        <div className="accpet-decline">
          <button>Accept</button>
          <button>Decline</button>
        </div>

      </section>
    </body>

  );
}
