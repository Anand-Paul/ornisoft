import React from "react";

import "./jit.scss";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/aboutImage.png";

const JIT = () => {
  return (
    <div className="product-detail">
      <img
        className="product-detail__shapes product-detail__shapes_right"
        src={frameRight}
        alt="Right asset"
      />
      <div className="container d-flex flex-column flex-lg-row justify-content-between">
        <figure className="product-detail__figure mb-3 mb-sm-5 mb-lg-0 flex-shrink-0 flex-grow-0">
          <img
            className="w-100 h-100 product-detail__img"
            src={aboutImage}
            alt="about"
          />
        </figure>
        <div className="product-detail__content">
          <h2 className="product-detail__overtitle mb-0">PRODUCTS</h2>
          <h3 className="product-detail__title">JIT</h3>
          <div className="product-detail__desc">
            <p>
              A JIT (Just In Time) Compiler is built into the ZCoder
              Application. Users who create a template can use this utility to
              check for syntax when developing ZML templates. The JIT Compiler
              can be used by anyone with access to the system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JIT;
