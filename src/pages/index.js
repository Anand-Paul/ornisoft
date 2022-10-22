import * as React from "react";

import Layout from "../components/layout";
import HeroSlider from "../components/hero-slider";
import AboutUs from "../components/about-us";
import Solutions from "../components/solutions";
import Products from "../components/products";

const Home = () => {
  return (
    <Layout stickyHeader>
      <HeroSlider />
      <AboutUs />
      <Solutions />
      <Products />
    </Layout>
  );
};

export default Home;
