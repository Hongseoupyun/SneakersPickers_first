import React, { useState, useEffect } from "react";
import "./forOffer.scss";
import tradeImg from "../images/trade-sample.webp";
import axios from "axios";
import ByOffer from "./byOffer";


//Component path: acceptedOffers > forOffer > byOffer
export default function ForOffers(props) {

  const [eachOffer, setEachOffer] = useState([]);


  //Axios post request to get the offered listing details using the listingID from props from Offer
  const loadEachOffer = function () {
    return axios.post("/api/myofferedproducts", { offeredid: props.offered_item_id, wantedID: props.wanted_item_id })
      .then((result) => {
        setEachOffer(result.data);
      })
  };


  const showIndividual = eachOffer.map((e) => {
    return (
      <ByOffer
        key={e.id}
        name={e.name}
        brand={e.brand}
        size={e.size}
        description={e.description}
        image_url={e.image_url}
        id={e.id}
        user_name={e.user_name}
        email={e.email}
      />
    );
  });

  useEffect(() => {
    loadEachOffer();
  }, []);

  return (
    <div>
      <div className="accepted">Accepted Trade</div>
      <article className="offers-cards">
        <div className="my-shoes-card">
      <div className="from">My Item:</div>
          <div>
            <img className="my-shoes-img" src={props.image_url} alt="" />
          </div>
          <div className="my-shoes-name">Name:{props.name}</div>
          <div className="my-shoes-size">Size:{props.size}</div>
          <div className="my-shoes-description">
            Description:{props.description}
          </div>
        </div>

        <div className="trade-img">
          <img src={tradeImg} alt="" />
        </div>

        {showIndividual}

      </article>
    </div>
  );
}
