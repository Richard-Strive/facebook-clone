import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import VocalAssisten from "./components/VocalAssistenEnv/VocalAssisten";

import NavBar from "./components/NavBar/NavBar";

import MainPage from "./components/MainPage/MainPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MessengerPage from "./components/MessengerPage/MessengerPage";
import LoginPage from "./components/LoginPage/LoginPage";

import io from "socket.io-client";
// const url = "https://intense-thicket-20816.herokuapp.com/";

const url = "http://localhost:5000";

const connOpt = {
  transports: ["websocket", "polling"],
};

const socket = io(url, { autoConnect: false }, connOpt);

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={RegistrationPage} />
        <Route
          exact
          path="/login"
          render={(props) => <LoginPage {...props} socket={socket} />}
        />
        <Route
          path="/home"
          render={(props) => <NavBar {...props} socket={socket} />}
        />
        <Switch>
          <Route
            exact
            path="/home/main"
            render={(props) => <MainPage {...props} />}
          />
          <Route
            exact
            path="/home/vocal"
            render={(props) => <VocalAssisten {...props} />}
          />
          <Route
            exact
            path="/home/me"
            render={(props) => <ProfilePage {...props} socket={socket} />}
          />
          <Route
            exact
            path="/home/messages"
            render={(props) => <MessengerPage {...props} socket={socket} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
