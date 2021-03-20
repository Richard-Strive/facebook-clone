import React, { useState, useEffect, useRef } from "react";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import Registraion from "./components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Registraion /> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
