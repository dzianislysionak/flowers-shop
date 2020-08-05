import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./register.styles.scss";
import FormInput from "../form-input/form-input.component";
import { setCollection } from "../../redux/shop/shop.actions";
import { signUpStartAsync } from "../../redux/user/user.actions";

const Register = ({ signUpStartAsync, setCollection }) => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("неверный пароль");
      return;
    }

    signUpStartAsync(userCredentials);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h3>РЕГИСТРАЦИЯ</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          label="name"
          required
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          label="confirm password"
          required
        />
        <button type="submit">регистрация</button>
      </form>
      <br />
      <Link
        to="/signin"
        className="register"
        onClick={() => setCollection({ title: "Вход" })}
      >
        вход
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCollection: (item) => dispatch(setCollection(item)),
  signUpStartAsync: (userCredentials) => {
    console.log("1", userCredentials);
    dispatch(signUpStartAsync(userCredentials));
  },
});

export default connect(null, mapDispatchToProps)(Register);
