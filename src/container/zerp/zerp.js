import React from "react";

import "./zerp.scss";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/aboutImage.png";

const Zerp = () => {
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
          <h3 className="product-detail__title">ZERP</h3>
          <div className="product-detail__desc">
            <p>
              ZERP is an ERP frame work. ZERP can be used to develop ERP
              solutions by non-programmers. The browser-based application
              development environment uses drag and drop facilities to create an
              application. Easy to learn, ZERP can be integrated with ZCoder to
              generate the final source code required for application to work.
              Applications developed by ZERP can also be used by using the ZERP
              Runtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zerp;
