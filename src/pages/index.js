import * as React from "react";
import AboutUs from "../components/about-us/about-us";
import Products from "../components/products/products";

import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <AboutUs/>
      <Products/>
    </Layout>
  );
};

export default Home;
