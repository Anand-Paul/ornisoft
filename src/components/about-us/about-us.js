import React from "react";

import "./about-us.scss";

import frameLeft from "../../images/Frame-left.png";
import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/ornisoftware.jpg";

import { ANIM_DELAY } from "../../constants";

const AboutUs = () => {
  return (
    <div className="about" id="about">
      <img
        className="about__shapes about__shapes_left"
        src={frameLeft}
        alt="Left asset"
      />
      <img
        className="about__shapes about__shapes_right"
        src={frameRight}
        alt="Right asset"
      />
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <figure
          className="about__figure mb-3 mb-sm-5 mb-lg-0 flex-shrink-0 flex-grow-0"
          data-sal="zoom-in"
          data-sal-delay={ANIM_DELAY}
          data-sal-easing="ease-in-out"
        >
          <img
            className="w-100 h-100 about__img"
            src={aboutImage}
            alt="about"
          />
        </figure>
        <div
          className="about__content"
          data-sal="zoom-in"
          data-sal-delay={ANIM_DELAY}
          data-sal-easing="ease-in-out"
        >
          <h2 className="about__overtitle mb-0">ABOUT US</h2>
          <h3 className="about__title">OrniSoft, we are</h3>
          <div className="about__desc">
            <p>
              With eight years of research, OrniSoft has come up with an
              un-parelled software called ZCoder. ZCoder is an Application
              Development Enhancement Utility that can generate up to 90-95% of
              the total source code required by a database-based application.
              ZCoder can generate source code in almost all modern computer
              languages including C#, Java, PHP, Python, HTML, JavaScript etc.
              ZCoder can also use common libraries like AngularJS, BootStrap,
              JQuery, ReactJS etc.
            </p>
            <p>
              OrniSoft is the house of ZCoder and ZERP. We also develop
              custom-tailored mobile applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
