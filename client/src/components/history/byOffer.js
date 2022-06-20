import React, { useState, useEffect } from "react";




//Component path: acceptedOffers > forOffer > byOffer
export default function ByItem(props) {
  return (
    <section className="mylisting-container-second">
      <img className="mylisting-img-second" src={props.image_url} alt="" />

      <div className="mylisting-card-contents-second">
      <div className="listing-text-second" id="description">
          <span>Offered by: {props.user_name}</span>
        </div>
        <div className="listing-text-second" id="name">
          <h1>{props.name}</h1>
        </div>
        <div className="listing-text-second" id="brand-size">
          <div className="my-brand-second">{props.brand}</div>
          <div className="my-size-second">Size {props.size}</div>
          <div className="my-email-second">Email {props.email}</div>
        </div>
        <div className="listing-text-second" id="description">
          <span>{props.description}</span>
        </div>
        <div className="listing-text" id="offers">
        </div>
      </div>
    </section>
  );
}
