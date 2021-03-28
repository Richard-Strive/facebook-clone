import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import VocalAssisten from "./components/VocalAssistenEnv/VocalAssisten";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MessengerPage from "./components/MessengerPage/MessengerPage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Route
          exact
          path="/register"
          render={(props) => <RegistrationPage {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <LoginPage {...props} />}
        />
        <Route path="/home" render={(props) => <NavBar {...props} />} />
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
            render={(props) => <ProfilePage {...props} />}
          />
          <Route
            exact
            path="/home/messages"
            render={(props) => <MessengerPage {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
