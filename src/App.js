import React from "react";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { authentification } from "./firebase/firebase";
import Cards from "./components/Cards/Cards";

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
            <Route path="/sign_in">
              <SignIn />
            </Route>
            <Route path="/sign_up">
              <SignUp />
            </Route>
            <Route path="/">
              {this.state.user ? <Cards /> : <Home />}
              </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
