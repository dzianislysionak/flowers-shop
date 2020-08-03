import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCollection } from "../../redux/shop/shop.actions";

import FormInput from "../../components/form-input/form-input.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = ({ setCollection }) => (
  <div className="sign-in-and-sign-up">
    <h3>SIGN IN</h3>
    <FormInput
      name="email"
      type="email"
      value=""
      //   handleChange={handleChange}
      label="email"
      required
    />
    <FormInput
      name="password"
      type="password"
      value=""
      //   handleChange={handleChange}
      label="password"
      required
    />
    <button type="submit">войти</button>
    <br />
    <Link
      to="/register"
      className="register"
      onClick={() => setCollection({ title: "Регистрация" })}
    >
      регистрация
    </Link>
    {/* <h6 className="reg">регистрация</h6> */}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setCollection: (item) => dispatch(setCollection(item)),
});

export default connect(null, mapDispatchToProps)(SignInAndSignUp);
