import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./register.styles.scss";
import FormInput from "../form-input/form-input.component";
import { setCollection } from "../../redux/shop/shop.actions";

const Register = ({ signUpStart, setCollection }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("неверный пароль");
      return;
    }

    signUpStart(email, password);
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
      {/* <h6 className="reg">регистрация</h6> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCollection: (item) => dispatch(setCollection(item)),
});

export default connect(null, mapDispatchToProps)(Register);
