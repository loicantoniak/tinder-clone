import React from "react";
import "../Form/Sign.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <div className="container-fluid">
      <div className="sign__header">
        <div>
          <Link to="/">
            <img className="sign__logo" src={logo} alt="logo_tinder" />
          </Link>
        </div>
      </div>
      <div className="sign__title">
        <h1>Créer un compte</h1>
      </div>
      <div className="sign__form container">
        <SignUpForm />
      </div>
    </div>
  );
}
