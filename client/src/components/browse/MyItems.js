

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Placeoffer.scss";
import { MdDescription } from "react-icons/md";
import tradeImg from "../images/trade.png";
import { TbShoe } from "react-icons/tb";


function MyItems(props) {

  const handleClick = () => {
    props.setOfferedID(props.id)
    console.log("select:", props.id)
  }

  console.log("thisis props id", props.id)

  return (
    <div className="my-shoes-card" >
      <input type="image" id="css" onClick={handleClick} value={props.id} className="my-shoes-img" src={props.image_url} />
      <div>
        <div className="others-shoes-name">
          {props.name}
        </div>
        <div className="others-shoes-description">
          <MdDescription/> {props.description}
        </div>
        <div className="others-shoes-size">
          {props.brand}/Size: {props.size}
        </div>
      </div>
    </div>
  )
}


export default MyItems;