import React from "react";
import './Header.css'

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import logo from "../../assets/images/logo_tinder.svg";
import { Link, useHistory } from "react-router-dom";

export default function Header(props) {
  const backButton = props.backButton;

  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <Link to="profil">
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      )}

      <Link to="/">
        <img className="header__logo" src={logo} alt="logo_tinder" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}
