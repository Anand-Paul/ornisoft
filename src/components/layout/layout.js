import React from "react";

import Header from "../header";
import Footer from "../footer";
import Banner from "../hero-slider";
import Products from "../products";
import StickyHeader from "../sticky-header";

import "./../../sass/main.scss";

const Layout = ({ children, stickyHeader = false }) => {
  return (
    <>
      <Header />
      {stickyHeader && <StickyHeader />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
