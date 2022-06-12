import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './browse.scss'

function Browse() {
  return (
    <Fragment>
      <div class="vertical-menu">
        <span className="filter">Filter list</span><br/>

        <span className="filtername">Brand</span>

        <form className="filter">
          <form className="brandcheck" id="filtered">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="brand" id="flexRadioDefault1" value="airjordan"/>
              <label class="form-check-label" for="flexRadioDefault1">
                Air Jordan
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="brand" id="flexRadioDefault2" value="nikedunks" />
              <label class="form-check-label" for="flexRadioDefault2">
                Nike Dunks
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="brand" id="flexRadioDefault1" value="nikeairforce"/>
              <label class="form-check-label" for="flexRadioDefault1">
              Nike Air Force
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="brand" id="flexRadioDefault1" value="adidasyeezy"/>
              <label class="form-check-label" for="flexRadioDefault1">
              Adidas Yeezy
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="brand" id="flexRadioDefault1" value="newbalances"/>
              <label class="form-check-label" for="flexRadioDefault1">
              New Balances
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="brand" id="flexRadioDefault1" value="vans"/>
              <label class="form-check-label" for="flexRadioDefault1">
              Vans
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="brand" id="flexRadioDefault1" value="others"/>
              <label class="form-check-label" for="flexRadioDefault1">
              Others
              </label>
            </div>
          </form>

          <span className="filtername">Size</span>

          <form className="sizecheck">
          <div class="form-check">
              <input class="form-check-input" type="radio" name="size" id="flexRadioDefault1" value="4"/>
              <label class="form-check-label" for="flexRadioDefault1">
              4
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="size" id="flexRadioDefault1" value="5"/>
              <label class="form-check-label" for="flexRadioDefault1">
              5
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="size" id="flexRadioDefault1" value="6"/>
              <label class="form-check-label" for="flexRadioDefault1">
              6
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="size" id="flexRadioDefault1" value="7"/>
              <label class="form-check-label" for="flexRadioDefault1">
              7
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="size" id="flexRadioDefault1" value="8"/>
              <label class="form-check-label" for="flexRadioDefault1">
              8
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="size" id="flexRadioDefault1" value="9"/>
              <label class="form-check-label" for="flexRadioDefault1">
              9
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="size" id="flexRadioDefault1" value="10"/>
              <label class="form-check-label" for="flexRadioDefault1">
              10
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="size" id="flexRadioDefault1" value="11"/>
              <label class="form-check-label" for="flexRadioDefault1">
              11
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="size" id="flexRadioDefault1" value="12"/>
              <label class="form-check-label" for="flexRadioDefault1">
              12
              </label>
            </div>
          </form>
          <button type="submit" form="filtered" class="btn btn-secondary mt-3">Filter</button>
          <button type="button" href="/browse/" class="btn btn-secondary mt-3">Reset</button>
        </form>
        
      </div>


      
    </Fragment>
  );
}

export default Browse;