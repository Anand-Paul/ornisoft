import * as React from "react";

import Layout from "../components/layout";
import HeroSlider from "../components/hero-slider";
import AboutUs from "../components/about-us";
import Solutions from "../components/solutions";
import Products from "../components/products";
import ContactForm from "../components/contact-form";
import { Seo } from "../components/seo";

import ornisoftware from "../images/orni.png";

const Home = () => {
  return (
    <Layout stickyHeader>
      <div
        data-bs-spy="scroll"
        data-bs-target="#scrollSpy"
        data-bs-offset="0"
        className="scrollspy"
      >
        <HeroSlider />
        <AboutUs />
        <Solutions />
        <Products />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Home;

export const Head = () => (
  <Seo
    title="OrniSoft"
    description="With eight years of research, OrniSoft has come up with an un-parelled software called ZCoder. "
    defaultImage={ornisoftware}
  />
);
