import React from "react";

import Top from "../top/top.components";
import Head from "../head/head.components";
import Collections from "../collections/collections.components";
import NamePage from "../name-page/name-page.components";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Top />
    <Head />
    <Collections />
    <NamePage />
  </div>
);

export default Header;
