import React from "react";
import myListingImg from "../images/mylisting-img-sample.webp"
import "./MyListings.scss"

export default function MyListings() {
  return (
    <body className="mylisting-body">
      <div className="mylisting-container">
        <div className="mylisting-img-card">
          <img className="mylisting-img" src={myListingImg}/>
        </div>
        <div className="mylisting-card-contents">
          <div className="listing-name">
            Jordan 1 X Travis Scott
          </div>
          <div className="listing-brand">
            Air Jordan
          </div>
          <div className="listing-size">
            Size 11
          </div>
          <div className="listing-description">
            Air jordan 1 X Travis Scott, Size 11, Gently used
          </div>
          <div className="listing-offers">
            5 Users want to trade 
          </div>
        </div>
      </div>
      <div className="addlisting-card">
        will add plus image and will redirect users to add a listing page
      </div>
      </body>
  );
}
