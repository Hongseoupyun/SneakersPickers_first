import React, { useState, useEffect } from "react";

import tradeImg from "../images/trade.png";
import axios from "axios";
import ByOffer from "./byOffer";

//Component path: acceptedOffers > forOffer > byOffer
export default function ForOffers(props) {
  const [eachOffer, setEachOffer] = useState([]);

  //Axios post request to get the offered listing details using the listingID from props from Offer
  const loadEachOffer = function () {
    return axios
      .post("/api/myofferedproducts", {
        offeredid: props.offered_item_id,
        wantedID: props.wanted_item_id,
      })
      .then((result) => {
        setEachOffer(result.data);
      });
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
    <section className="mylisting-container-history-left">
      <img className="mylisting-img" src={props.image_url} alt="" />

      <div className="mylisting-card-contents-history-left">
        <div className="listing-text-history" id="name">
          <h1>{props.name}</h1>
        </div>
        <div className="listing-text-history" >
          <div className="itembrand">{props.brand}</div>
          <div className="itemsize">Size {props.size}</div>
        </div>
        <div className="listing-text-history" >
          <span>{props.description}</span>
        </div>
        <div className="listing-text-history">
        </div>
      </div>
      <div className="tradeslot">
        <img src={tradeImg} alt="" />
      </div>
      {showIndividual}
    </section>
  );
}
