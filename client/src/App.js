import './App.css';
import React, { Fragment }from "react";

import NavBar from "./components/Navbar"
import Main from './components/Main'
import ApplicationProvider from './context/ApplicationProvider';

function App() {
  return (
    <Fragment>
      <ApplicationProvider>
        <div className="App">
          <NavBar />
        </div>
          <Main />
      </ApplicationProvider>
    </Fragment>
  );
}

export default App;
