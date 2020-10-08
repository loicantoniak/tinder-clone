import React from "react";
import "./Home.css";
import tinder from "../../assets/images/tinder.png";
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div className="home">
      <div className="home__background">
        <div className="home__header">
          <img className="home__logo" src={tinder} alt="logo_tinder" />
          <Link to="/sign_in">
          <button className="home__ConnexionButton">Connexion</button>
          </Link>
        </div>
        <div className="home__title">
          <h1>Matchez. Discutez. Faites des rencontres.</h1>
          <Link to="/sign_up">
          <button className="home__RegistrationButton">Créer un compte</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
