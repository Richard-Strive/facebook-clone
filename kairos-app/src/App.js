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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import io from "socket.io-client";

const url = process.env.REACT_APP_SOCKET_IO_URL;

const connOpt = {
  transports: ["websocket", "polling"],
};

const socket = io(url, { autoConnect: false }, connOpt);

function App() {
  const token = localStorage.getItem("accessToken");
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
          <ProtectedRoute
            exact
            path="/home/main"
            component={<MainPage />}
            token={token}
          />

          <ProtectedRoute
            exact
            path="/home/vocal"
            render={(props) => <VocalAssisten {...props} />}
          />
          <ProtectedRoute
            exact
            path="/home/me"
            render={(props) => <ProfilePage {...props} socket={socket} />}
          />
          <ProtectedRoute
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
