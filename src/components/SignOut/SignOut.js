import React, { Component } from "react";
import { authentification } from "../../firebase/firebase";
import { Redirect } from "react-router-dom";

export default class SignOut extends Component {
  componentDidMount() {
    authentification.signOut();
  }
  render() {
    return <Redirect to="/" />;
  }
}
