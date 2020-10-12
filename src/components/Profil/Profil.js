import React, { useEffect, useState } from "react";
import "./Profil.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { firestore } from "../../firebase/firebase";
import { authentification } from "../../firebase/firebase";
import Information from "./Information/Information";

export default function Profil() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("users")
      .where("id", "==", authentification.currentUser.uid)
      .onSnapshot((snapshot) =>
        setUsers(snapshot.docs.map((doc) => doc.data()))
      );

    // the cleanup...
    return () => unsubscribe();
  }, []);

  return (
    <div className="profil">
      <Header backButton="/" />
      <div className="container-fluid">
        <div className="sign__title">
          <h1>Profil</h1>
        </div>
        <div className="sign__form container">
          {users.map((user, i) => (
            <Information
              key={i}
              firstname={user.firstname}
              lastname={user.lastname}
              birthdate={user.birthdate}
              sex={user.sex}
            />
          ))}
          <div className="profil__buttons">
            <Link to="/sign_out">
              <button className="profil__button">Déconnexion</button>
            </Link>
            <Link to="/sign_out">
              <button className="profil__button">Mettre à jour</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
