import React from "react";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/sign_in">
            <SignIn/>
          </Route>
          <Route path="/sign_up">
            <SignUp/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
