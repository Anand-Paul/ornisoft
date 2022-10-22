import React from "react";

import "./db-analyzer.scss";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/aboutImage.png";

const DBAnalyzer = () => {
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
          <h3 className="product-detail__title">DB Analyzer</h3>
          <div className="product-detail__desc">
            <p>
              DB Analyzer is a client-server, artificial intelligence (AI) based
              utility to scan your database and come up with the default project
              definition. The utility can import all or selected tables into the
              ZCoder Application which the users can further enhance. This
              utility can be downloaded directly from the application and
              currently works on Windows-based operating systems. Once
              installed, the application allows the user to connect to their
              database. This AI-based utility scans the whole database and comes
              with the default application definition. The application
              definition can be corrected in case the produced results are
              inappropriate for the current project. There is also an option to
              learn from the correction so that next time the DB Analyzer can
              perform better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBAnalyzer;
