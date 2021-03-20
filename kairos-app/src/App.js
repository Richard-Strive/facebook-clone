import "./App.css";
import { useState, useEffect, useRef } from "react";
import webcam from "react-webcam";
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
