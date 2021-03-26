import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import Registraion from "./components/Registration/Registration";
import VocalAssisten from "./components/VocalAssistenEnv/VocalAssisten";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import NavBar from "./components/NavBar/NavBar";
import MessengerPage from "./components/MessengerPage/MessengerPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/register"
          render={(props) => <Registraion {...props} />}
        />
        <Route exact path="/main" render={(props) => <MainPage {...props} />} />
        <Route
          exact
          path="/vocal"
          render={(props) => <VocalAssisten {...props} />}
        />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/me"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          exact
          path="/messages"
          render={(props) => <MessengerPage {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
