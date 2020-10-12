import React, { useState } from "react";
import "../Form/Form.css";
import { useFormik } from "formik";
import { Link, Redirect } from "react-router-dom";
import { authentification } from "../../firebase/firebase";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Veuillez saisir ce champ (obligatoire)";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Veuillez saisir une adresse mail valide";
    }
    if (!values.password) {
      errors.password = "Veuillez saisir ce champ (obligatoire)";
    } else if (values.password.length < 8) {
      errors.password =
        "Le mot de passe doit contenir au minimum 8 caractères.";
    }
    if (!values.passwordCopy) {
      errors.passwordCopy = "Veuillez saisir ce champ (obligatoire)";
    } else if (!(values.passwordCopy === values.password)) {
      errors.passwordCopy = "Les mots de passe ne sont pas identiques";
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordCopy: "",
    },
    validate,
    async onSubmit(values) {
      const { email, password } = values;
      try {
        await authentification.createUserWithEmailAndPassword(email, password);
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
        <label htmlFor="Email">Votre email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="alert__error">{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="alert__error">{formik.errors.password}</div>
        ) : null}

        <label htmlFor="password">Confirmation du mot de passe</label>
        <input
          type="password"
          id="passwordCopy"
          name="passwordCopy"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.passwordCopy}
        />
        {formik.touched.passwordCopy && formik.errors.passwordCopy ? (
          <div className="alert__error">{formik.errors.passwordCopy}</div>
        ) : null}

        <Link to="sign_in">
          <p>Déjà inscrit ? Connecte-toi ici</p>
        </Link>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Redirect to="/createProfil" /> : "S'inscire"}
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
