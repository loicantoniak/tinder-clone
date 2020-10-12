import React, { useState } from "react";
import "../Form/Form.css";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import { firestore, authentification } from "../../firebase/firebase";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  function validate(values) {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Veuillez saisir ce champ (obligatoire)";
    }
    if (!values.lastname) {
      errors.lastname = "Veuillez saisir ce champ (obligatoire)";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      sex: "",
      birthdate: "",
    },
    validate,
    async onSubmit(values) {
      const { firstname, lastname, sex, birthdate } = values;
      try {
        await firestore.collection("users").add({
          id: authentification.currentUser.uid,
          firstname: firstname,
          lastname: lastname,
          sex: sex,
          birthdate: birthdate,
        });
        setIsSubmitting(true);
      } catch (error) {
        setHasError(true);
        setIsSubmitting(false);
      }
    },
  });

  return (
    <>
      <form className="sign__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="firsname">Votre prénom</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.firstname}
        />
        {formik.touched.firstname && formik.errors.firstname ? (
          <div className="alert__error">{formik.errors.firstname}</div>
        ) : null}
        <label htmlFor="lastname">Votre nom de famille</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.lastname}
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div className="alert__error">{formik.errors.lastname}</div>
        ) : null}

        <label htmlFor="sex">Genre</label>
        <select
          name="sex"
          id="sex"
          value={formik.values.sex}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Sexe</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>

        <label htmlFor="sex">Date de naissance</label>
        <input
          type="date"
          name="birthdate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.birthdate}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Redirect to="/" /> : "S'inscire"}
        </button>

        {hasError && (
          <p>
            <span className="error">Une erreur est survenue</span>
          </p>
        )}
      </form>
    </>
  );
}
