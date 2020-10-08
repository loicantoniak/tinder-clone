import React from "react";
import "../Form/Form.css";
import { useFormik } from "formik";
import {Link} from "react-router-dom"

export default function SignUp() {
  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit(values) {
      console.log(values);
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
        <Link to="sign_up">
          <p>Pas encore inscrit ? Inscris-toi ici</p>
        </Link>
        <Link to="reset_password">
          <p>Mot de passe oublié ?</p>
        </Link>
        <button type="submit">Se connecter</button>
      </form>
    </>
  );
}