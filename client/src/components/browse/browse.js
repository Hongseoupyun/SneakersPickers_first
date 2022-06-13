import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './browse.scss'
import runlogo from '../images/runlogo.gif'

function Browse() {
  return (
    <header className="layout">
      <header class="vertical-menu" sticky="fixed">
        
          <span className="filter">Filter list</span><br/>

          <label for="brand">Pick a brand:</label>
          <select name="brand" id="brand">
            <optgroup label="Brand">
              <option value="air jordan">Air Jordan</option>
              <option value="nike dunks">Nike Dunks</option>
              <option value="nike air force">Nike Air Force</option>
              <option value="adidas yeezy">Adidas Yeezy</option>
              <option value="new balances">New Balances</option>
              <option value="vans">Vans</option>
              <option value="others">Others</option>
            </optgroup> 
          </select><br/>

          <label for="size" placeholder="Size">Pick a size:</label>
          <select name="size" id="size">
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
          <button type="submit" class="btn btn-secondary mt-3">Filter</button>
          <button type="button" href="/browse/" class="btn btn-secondary mt-3">Reset</button>
        </div>
        <img src={runlogo} alt="run" className="runlogo"></img>
      </header>


      <header className="tradecard">
        Hello
      </header>
    </header>
  );
}

export default Browse;