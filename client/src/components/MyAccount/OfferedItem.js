import React from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import { GiBarefoot } from "react-icons/gi";


//Component path: Offer > MyOffer > OfferedItem
export default function OfferedItem(props) {
  return (
   
    <div className="myoffers-cards" id="right">
      <img className="myoffers-img" src={props.image_url} alt="" />
      <div className="listing-text-history" >
          <h1>{props.name}</h1>
          <div><BsFillBookmarkHeartFill /> {props.preference}</div>
          <div className="itembrand"><MdDescription />{props.description}</div>
          <div className="itemsize"><GiBarefoot/>{props.brand}/Size {props.size}</div>
        </div>
    </div>
    
  
  );
}
