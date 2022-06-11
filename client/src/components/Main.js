import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Logform from "./Logform";
import Profile from "./Profile";
import Offers from "./MyAccount/Offers"
import MyListings from "./MyAccount/MyListings"
import AddAListing from "./MyAccount/AddAListing"



const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Logform/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/offers' element={<Offers/>}></Route>
      <Route path='/mylistings' element={<MyListings/>}></Route>
      <Route path='/addalisting' element={<AddAListing/>}></Route>
    </Routes>
  );
}

export default Main;

