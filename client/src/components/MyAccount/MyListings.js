import React from "react";
import myListingImg from "../images/mylisting-img-sample.webp"
import "./MyListings.scss"

export default function MyListings() {
  return (
      <div className="mylisting-container">
        <div className="mylisting-img-card">
          <img className="mylisting-img" src={myListingImg}/>
        </div>
        <div className="mylisting-card-contents">

        </div>

      </div>
  );
}
