import React from "react";
import "./AddAListing.scss"


function AddAListing() {
  return (
    <div calssName="master-container">
      <div>
        Will hold image
      </div>
      <div className="form">
        <form>
          <h3>Uploade your shoes to trade</h3><br></br>
          <label for="shoes-name">Shoes Name</label><br></br>
          <input type="text" name="shoes-name"></input>
          <div className="size-brand">
            <select name="Size">
              <option >Size 4</option>
              <option >Size 5</option>
              <option >Size 6</option>
              <option >Size 7</option>
              <option >Size 8</option>
              <option >Size 9</option>
              <option >Size 10</option>
              <option >Size 11</option>
              <option >Size 12</option>
            </select>
            <select name="Brand">
              <option >Air Jordan</option>
              <option >Nike Dunks</option>
              <option >Nike Air Force 1</option>
              <option >Adidas Yeezy</option>
              <option >New balances</option>
              <option >Vans/Converse</option>
              <option >Others</option>
            </select>
          </div>
          <label for="description">Description</label><br></br>
          <input type="text" name="description"></input><br></br>
          <label for="img-url">Image Url</label><br></br>
          <input type="text" name="img-url"></input><br></br>
          <label for="preferences">Preferences</label><br></br>
          <input type="text" name="preferences"></input><br></br>
          <button>Publish</button>



        </form>
      </div>


    </div>

  );
}

export default AddAListing;