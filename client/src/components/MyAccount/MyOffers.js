import React, { useState, useEffect } from "react";
import tradeImg from "../images/trade-sample.webp";
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
      <div className="accept-decline">
          <button onClick={acceptOffer}>Accept</button>
          <button onClick={declineOffer}>Decline</button>
        </div>
    </div>
  );
}
