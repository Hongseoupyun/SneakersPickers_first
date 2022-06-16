import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './browse.scss'
import runlogo from '../images/runlogo.gif'
import axios from "axios";
import ListingItem from "./ListingItem"

function Browse() {

  const [listings, setListings] = useState([])
  const [brands, setBrands] = useState("")
  const [sizes, setSizes] = useState("")

  //loads listing on page-load
  useEffect(() => {
    loadListing()
  }, []);

  //loads all available listing
  function loadListing() {
    return(axios.get('/api/listings')
    .then((result) => {
      console.log(result.data)
      setListings(result.data)
    })
    )
  }

  //assigns result variable to pass to ListingItem
  const cardListing = listings.map((listing) => {
    console.log("listingidhere:", listing.id)
    return (
      <ListingItem
        key={listing.id}
        name={listing.name}
        size={listing.size}
        brand={listing.brand}
        picture={listing.image_url}
        preference={listing.preference}
        description={listing.description}
        id={listing.id}
      />
    );
  });

  
//fetches filtered api with onclick from filter button
  function loadFilter() {
    return(axios.post('/api/listingsfilter', {size: sizes, brand: brands})
      .then((result) => {
        setListings(result.data)
      })
    )
  }

  //runs each time listings gets updated


  return (
    <header className="layout">
      <header class="vertical-menu" sticky="fixed">
          <span className="filter">Filter list</span><br/>

          <label for="brand">Pick a brand:</label>
          <select name="brand" id="brand" onChange={(e) => {setBrands(e.target.value)}}>
            <optgroup label="Brand">
              <option value="air jordan">Air Jordan</option>
              <option value="nike dunks">Nike Dunks</option>
              <option value="nike air force">Nike Air Force</option>
              <option value="adidas yeezy">Adidas Yeezy</option>
              <option value="new balances">New Balances</option>
              <option value="vans/converse">Vans/Converse</option>
              <option value="others">Others</option>
            </optgroup> 
          </select><br/>

          <label for="size">Pick a size:</label>
          <select name="size" id="size" onChange={(e) => {setSizes(e.target.value)}}>
            <optgroup label="Size">
              <option value="4">Size 4</option>
              <option value="5">Size 5</option>
              <option value="6">Size 6</option>
              <option value="7">Size 7</option>
              <option value="8">Size 8</option>
              <option value="9">Size 9</option>
              <option value="10">Size 10</option>
              <option value="11">Size 11</option>
              <option value="12">Size 12</option>
            </optgroup>
          </select><br/>

        <div className="buttons">
          <button type="submit" onClick={() => loadFilter()} class="btn btn-secondary mt-3">Filter</button>
          <button type="button" onClick={() => loadListing()} className="btn btn-secondary mt-3">Reset</button>
        </div>
        <div className="runlogo">
        <img src={runlogo} alt="run" className="shoepic"></img>
        </div>
      </header>


      <header className="tradecard">
        {cardListing}
      </header>
    </header>
  );
}

export default Browse;