import React from "react";

import FormInput from "../../components/form-input/form-input.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <h3>SIGN IN</h3>
    <FormInput
      name="email"
      type="email"
      value="email"
      //   handleChange={handleChange}
      label="email"
      required
    />
    <FormInput
      name="password"
      type="password"
      value="password"
      //   handleChange={handleChange}
      label="password"
      required
    />
  </div>
);

export default SignInAndSignUp;
