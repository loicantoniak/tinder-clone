import React from "react";
import { authentification } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Profil() {
  const user = authentification.currentUser;

  return (
    <div>
      <Header backButton="/" />
      <p>{user.email}</p>
      <Link to="/sign_out">
        <button className="home__RegistrationButton ">Déconnexion</button>
      </Link>
    </div>
  );
}
