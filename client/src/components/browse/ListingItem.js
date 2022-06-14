import React from "react";
import "./ListingItem.scss"

export default function ListItem(props) {

  return (
  <div class="card">
    <div class="photo">
      <img src={props.picture} alt=""/>
    </div>
    <div class="description">
      <h2>{props.name}</h2>
      <h4>Size: {props.size}</h4> 
      <h1>{props.brand}</h1>
      <h4>Description:</h4> 
      <p>{props.description}</p>
      <h4>Preferences:</h4> 
      <p>{props.preference}</p>
      <button>Offer</button>
      <button>Favorite</button>
    </div>
  </div>
  );
  }