import React, { useState, useEffect } from "react";
import tradeImg from "../images/trade.png";
import axios from "axios";
import OfferedItem from "./OfferedItem";


//Component path: Offer > MyOffer > OfferedItem
export default function MyOffers(props) {

  const [eachOffer, setEachOffer] = useState([]);


  //Axios post request to get the offered listing details using the listingID from props from Offer
  const loadEachOffer = function () {
    return axios.post("/api/offerlist", { offeredid: props.offered_item_id, wantedID: props.wanted_item_id })
      .then((result) => {
        setEachOffer(result.data);
      })
  };


  const showIndividual = eachOffer.map((e) => {
    return (
      <OfferedItem
        key={e.id}
        name={e.name}
        brand={e.brand}
        size={e.size}
        description={e.description}
        image_url={e.image_url}
        user_name={e.user_name}
        email={e.email}
      />
    );
  });

  const acceptOffer = function () {
    return axios.post("/api/acceptoffer", { offerid: props.offerid, offeredid: props.offered_item_id, wantedID: props.wanted_item_id })
    .then((result) => {
        console.log("offer accepted");
        window.open('/offers', "_self")
      })
  };

  
  const declineOffer = function () {
    return axios.post("/api/declineoffer", { offerid: props.offerid})
      .then((result) => {
        console.log("offer declined")
        window.open('/offers', "_self")
      })
  };

  useEffect(() => {
    loadEachOffer();
  }, []);
  

  return (
    <div>
    <section className="mylisting-container-offers-left">
      <img className="mylisting-img" src={props.image_url} alt="" />

      <div className="mylisting-card-contents-offers-left" id="offerleft">
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
          <button class="acceptofferbutton" onClick={acceptOffer}>Accept</button>
        <img className="tradepic" src={tradeImg} alt="" />
          <button class="declineofferbutton" onClick={declineOffer}>Decline</button>
      </div>
      {showIndividual}
    </section>
    </div>
  );
}



