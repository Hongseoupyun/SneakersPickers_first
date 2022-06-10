import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Logform from "./Logform"
import Onetab from "./Onetab"
import Profile from "./Profile"

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Logform/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/onetab' element={<Onetab/>}></Route>
    </Routes>
  );
}

export default Main;

