import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.components";
import HomePage from "./pages/homepage/home-page.pages";
import About from "./pages/about/about.pages";
import Contacts from "./pages/contacts/contacts.pages";
import Delivery from "./pages/delivery/delivery.pages";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.pages";
import Register from "./components/register/register.component";

import "./App.css";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/signin" component={SignInAndSignUp} />
      <Route path="/register" component={Register} />
    </Switch>
  </div>
);
export default App;
