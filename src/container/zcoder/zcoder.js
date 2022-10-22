import React from "react";

import "./zcoder.scss";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/aboutImage.png";

const ZCoder = () => {
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
          <h3 className="product-detail__title">ZCODER</h3>
          <div className="product-detail__desc">
            <p>
              ZCoder, Ornisoft’s flagship product is an Application Development
              Enhancement Utility that generates 80-90% of the total source code
              required for a Database Application in almost all the current
              technologies. Quite simply, it is a multiplatform ML (AI) based
              application that does majority of the coding work for you in a bug
              free and swift manner. A realisation of a beautiful dream that
              began 8 years ago, ZCoder stands apart in every way when compared
              with other code generators that are commonly used around the world
              today. ZCoder allows a programmer to generate templates for a web
              based or mobile based application in the language he/she prefer
              thereby significantly reducng the time taken to complete a
              project. It not only makes his/her work easy and fast, but also
              results in error free coding hence, giving the coder confidence to
              even take on complicated projects that were otherwise beyond
              his/her realm of expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZCoder;
