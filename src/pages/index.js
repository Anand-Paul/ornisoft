import * as React from "react";

import Layout from "../components/layout";
import AboutUs from "../components/about-us";

const Home = () => {
  return (
    <Layout stickyHeader>
      <AboutUs />
    </Layout>
  );
};

export default Home;
