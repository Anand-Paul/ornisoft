import React from "react";

import Header from "../header";
import Footer from "../footer";

import "./../../sass/main.scss";
import StickyHeader from "../sticky-header/sticky-header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StickyHeader/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
