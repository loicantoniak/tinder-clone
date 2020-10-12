import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";

export default function chat(props) {
  const { name, message, profilPic, timestamp } = props;

  return (
    <>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilPic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </>
  );
}
