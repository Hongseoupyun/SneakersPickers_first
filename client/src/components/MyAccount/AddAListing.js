import React from "react";
import "./AddAListing.scss";

function AddAListing() {
  return (
    <body className="Add-body">
      <div className="master-container">
        <div>
          <img src="client/src/components/images/sneakers2.jpeg" />
        </div>
        <form className="form">
          <h3>Uploade your shoes to trade</h3>
          <br />
          <label for="shoes-name">Shoes Name</label>
          <br />
          <input type="text" name="shoes-name" />
          <div className="size-brand">
            <select name="Size">
              <option>Size 4</option>
              <option>Size 5</option>
              <option>Size 6</option>
              <option>Size 7</option>
              <option>Size 8</option>
              <option>Size 9</option>
              <option>Size 10</option>
              <option>Size 11</option>
              <option>Size 12</option>
            </select>
            <select name="Brand">
              <option>Air Jordan</option>
              <option>Nike Dunks</option>
              <option>Nike Air Force 1</option>
              <option>Adidas Yeezy</option>
              <option>New balances</option>
              <option>Vans/Converse</option>
              <option>Others</option>
            </select>
          </div>
          <label for="description">Description</label>
          <br />
          <input type="text" name="description" />
          <br />
          <label for="img-url">Image Url</label>
          <br />
          <input type="text" name="img-url" />
          <br />
          <label for="preferences">Preferences</label>
          <br />
          <input type="text" name="preferences" />
          <br />
          <button>Publish</button>
        </form>
      </div>
    </body>
  );
}

export default AddAListing;
