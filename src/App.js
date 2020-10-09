import React from "react";
import "./App.css";

import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Cards from "./components/Cards/Cards";
import Profil from "./components/Profil/Profil";
import SignOut from "./components/SignOut/SignOut";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { authentification } from "./firebase/firebase";
import NotFound from "./components/NotFound/NotFound";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: null,
    };
  }

  componentDidMount() {
    this.unsubscribeAuth = authentification.onAuthStateChanged((user) => {
      this.setState({ user, isLoading: false });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/sign_in">
              <SignIn />
            </Route>
            <Route exact path="/sign_up">
              <SignUp />
            </Route>
            <Route exact path="/sign_out">
              {this.state.user ? <SignOut /> : <Redirect to="sign_in" />}
            </Route>
            <Route exact path="/profil">
              {this.state.isLoading ? <p>Chargement</p> : this.state.user ? <Profil /> : <Redirect to="sign_in" /> }
            </Route>
            <Route exact path="/">
              {this.state.isLoading ? <p>Chargement</p> : this.state.user ? <Cards /> :  <Home /> }
            </Route>
            <Route path="/">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
