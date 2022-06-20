import React, { useState, useEffect } from "react";
import tradeImg from "../images/trade-sample.webp";


//Component path: Offer > MyOffer > OfferedItem
export default function OfferedItem(props) {
  return (
    <div className="others-shoes-card">
      <div className="offer">Offered Item:</div>
      <div>
        <img className="others-shoes-img" src={props.image_url} alt="" />
      </div>
      <div className="others-shoes-name">Name:{props.name}</div>
      <div className="others-shoes-size">Size:{props.size}</div>
      <div className="others-shoes-description">
        Description:{props.description}
      </div>
      <div className="from">Offered by: {props.user_name}</div>
      <div className="contact">Email: {props.email}</div>
    </div>
  );
}
