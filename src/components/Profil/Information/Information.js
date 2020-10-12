import React from "react";
import "../../Form/Form.css";
import "./Information.css";

export default function Information(props) {
  const { firstname, lastname, birthdate, sex } = props;
  return (
    <div className="information">
      <label htmlFor="firsname">Votre prénom</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder={firstname}
        disabled
      />
      <label htmlFor="firsname">Votre nom de famille</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder={lastname}
        disabled
      />
            <label htmlFor="firsname">Genre</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder={sex}
        disabled
      />
            <label htmlFor="firsname">Votre date de naissance</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder={birthdate}
        disabled
      />
     
    </div>
  );
}
