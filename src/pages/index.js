import * as React from "react";

import Layout from "../components/layout";
import AboutUs from "../components/about-us";
import Solutions from "../components/solutions";
import Products from "../components/products/products";

const Home = () => {
  return (
    <Layout stickyHeader>
      <AboutUs />
      <Solutions />
      <Products/>
    </Layout>
  );
};

export default Home;
