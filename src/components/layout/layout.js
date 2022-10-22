import React from "react";

import Header from "../header";
import Footer from "../footer";
import Banner from "../hero-slider";

import "./../../sass/main.scss";
import StickyHeader from "../sticky-header/sticky-header";
import Products from "../products";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StickyHeader/>
      <Banner/>
      <main>{children}</main>
      {/* <Products/> */}
      <Footer />
    </>
  );
};

export default Layout;
