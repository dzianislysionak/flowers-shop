import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCollection } from "../../redux/shop/shop.actions";

import FormInput from "../../components/form-input/form-input.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = ({ signInStart, setCollection }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();

    signInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in-and-sign-up">
      <h3>SIGN IN</h3>
      <form onSubmit={handleSubmit}></form>
      <FormInput
        name="email"
        type="email"
        value={email}
        handleChange={handleChange}
        label="email"
        required
      />
      <FormInput
        name="password"
        type="password"
        value={password}
        handleChange={handleChange}
        label="password"
        required
      />
      <button type="submit">войти</button>
      <form />
      <br />
      <Link
        to="/register"
        className="register"
        onClick={() => setCollection({ title: "Регистрация" })}
      >
        регистрация
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCollection: (item) => dispatch(setCollection(item)),
});

export default connect(null, mapDispatchToProps)(SignInAndSignUp);
