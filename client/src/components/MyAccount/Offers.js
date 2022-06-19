import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Offers.scss"
import tradeImg from "../images/trade-sample.webp"
import myShoesImg from "../images/mylisting-img-sample.webp"
import othersShoesImg from "../images/mylisting-img-sample.webp"

export default function Offers() {
  const [ offers, setOffers ] = useState([]);
  
  const getOffers = function () {
    axios.get("/offers")
    .then((result) => {
      setOffers(result.data)
      console.log("this is:", result.data)
    })
    .catch((err) => {
      console.log("error!", err)
    })
  }

  useEffect(() => {
    getOffers()
  }, [])


  return (<>
  {offers.map((offer) => <body className="offers-body">
      <section className="offers-container">
        <div className="from">
          From username
        </div>
        <article className="offers-cards">
          <div className="my-shoes-card">
            <div>
              <img className="my-shoes-img" src={offer.from_image}/>
            </div>
            <div className="my-shoes-name">
              {offer.from_name}
            </div>
            <div className="my-shoes-brand">
              {offer.from_brand}
            </div>
            <div className="my-shoes-size">
              {offer.from_size}
            </div>
            <div className="my-shoes-description">
              {offer.from_description}
            </div>
          </div>
          <div className="trade-img">
            <img src={tradeImg}/>
          </div>
          <div className="others-shoes-card">
            <div>
              <img className="others-shoes-img"src={offer.to_image} />
            </div>
            <div className="others-shoes-name">
              {offer.to_name}
            </div>
            <div className="others-shoes-brand">
              {offer.to_brand}
            </div>
            <div className="others-shoes-size">
              {offer.to_size}
            </div>
            <div className="others-shoes-description">
              {offer.to_description}
            </div>
          </div>
        </article>
        <div className="accept-decline">
          <button>Accept</button>
          <button>Decline</button>
        </div>

      </section>
    </body>
    )}
    </>
  );
}