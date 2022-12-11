import React from "react";

import Header from "../header";
import Footer from "../footer";
import StickyHeader from "../sticky-header";

import "./../../sass/main.scss";

const Layout = ({ children, stickyHeader = false }) => {
  return (
    <div>
      <Header stickyHeader={stickyHeader} />
      {stickyHeader && <StickyHeader />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
