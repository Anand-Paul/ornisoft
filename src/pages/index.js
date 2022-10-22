import * as React from "react";

import Layout from "../components/layout";
import AboutUs from "../components/about-us";
import Solutions from "../components/solutions";

const Home = () => {
  return (
    <Layout stickyHeader>
      <AboutUs />
      <Solutions />
    </Layout>
  );
};

export default Home;
