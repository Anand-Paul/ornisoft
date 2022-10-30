import React from "react";

import Header from "../header";
import Footer from "../footer";
import StickyHeader from "../sticky-header";

import "./../../sass/main.scss";

const Layout = ({ children, stickyHeader = false }) => {
  return (
    <>
      <Header stickyHeader={stickyHeader}/>
      {stickyHeader && <StickyHeader />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
