import React from "react";


export default function MyListingItem(props) {
  const { name, description, brand, size, img } = props

  return (
    <section className="mylisting-container">

      <img className="mylisting-img" src={img} />

      <div className="mylisting-card-contents">
        <div className="listing-text" id="name">
          <h1>{name}</h1>
        </div>
        <div className="listing-text" id="brand">
          <span>{brand}</span>
        </div>
        <div className="listing-text" id="size">
          <span>Size {size}</span>
        </div>
        <div className="listing-text" id="description">
          <span>{description}</span>
        </div>
        <div className="listing-text" id="offers">
          5 Users want to trade
        </div>
      </div>
    </section>
  )

}