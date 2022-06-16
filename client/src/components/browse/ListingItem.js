import React from "react";
import "./ListingItem.scss";
import { Link } from "react-router-dom";

export default function ListingItem(props) {


  return (
    <div class="cardsale">
      <div class="photo">
        <img src={props.picture} alt="" />
      </div>
      <div class="description">
        <h2>{props.name}</h2>
        <h4>Size: {props.size}</h4>
        <h1>{props.brand}</h1>
        <h4>Description:</h4>
        <p>{props.description}</p>
        <h4>Preferences:</h4>
        <p>{props.preference}</p>
        <Link to={`/placeoffer/${props.key}`} > Offer </Link>
        <button>Favorite</button>
      </div>
    </div>
  );
}


