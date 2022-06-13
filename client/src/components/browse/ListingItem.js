import React from "react";
import "./ListingItem.scss"

export default function ListItem(props) {

  return (
    <li className="listcard">
      <img
        className="listcardimage"
        src={props.avatar}
        alt=""
      />
      {props.name}
      {props.size}
      {props.brand}
      {props.description}
      {props.preference}
    </li>
  );
  }