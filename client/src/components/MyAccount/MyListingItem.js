import React from "react";


export default function MyListingItem(props) {
  const { name, description, brand, size, img, total_offers } = props

  return (
    <section className="mylisting-container">

      <img className="mylisting-img" src={img} />

      <div className="mylisting-card-contents">
        <div className="listing-text" id="name">
          <h1>{name}</h1>
        </div>
        <div className="listing-text" id="brand-size">
          <div className="my-brand">{brand}</div>
          <div className="my-size">Size {size}</div>
        </div>
        <div className="listing-text" id="description">
          <span>{description}</span>
        </div>
        <div className="view-offers">
        <a href="/offers"> <button type="submit">View Offers</button></a>
        </div>
        <div className="listing-text" id="offers">
          <button type="button" class="btn btn-primary">
          <span className="badge badge-light">{total_offers}</span>OFFERS
          </button>
        </div>
      </div>
    </section>
  )

}