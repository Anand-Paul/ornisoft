import React from "react";
import { Link } from "gatsby";

import "./libman.scss";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/aboutImage.png";

const LibmanSuite = () => {
  return (
    <div className="product-detail">
      <img
        className="product-detail__shapes product-detail__shapes_right"
        src={frameRight}
        alt="Right asset"
      />
      <div className="container d-flex flex-column flex-lg-row justify-content-between">
        <div className="product-detail__content">
          <figure className="product-detail__figure mb-3 mb-sm-5 mb-lg-3 flex-shrink-0 flex-grow-0 float-start">
            <img
              className="w-100 h-100 product-detail__img"
              src={aboutImage}
              alt="about"
            />
          </figure>

          <h2 className="product-detail__overtitle mb-0">PRODUCTS</h2>
          <h3 className="product-detail__title">LibMan</h3>
          <div className="product-detail__desc">
            <h5>
              <strong>What is LibMan Suite?</strong>
            </h5>
            <p>
              Knowing there are so many applications available in the market
              today for Library Management, LibMan is completely unique in
              handling the OPAC and other management functionalities as a mobile
              app.
            </p>
            <p>
              Probably first of its kind in the world, LibMan started as a
              solution for basic library operations and developed into a
              complete suite which can now cater all library operations through
              mobile in a simple and effective way.
            </p>
            <p>
              How can the resource of a library be brought to its users more
              than the way the traditional ILMS do is what Libman pursued from
              the beginning. In the process it connects not only many users but
              many libraries also as a one-stop search point. Subscribers can
              access multiple libraries from a single mobile app which runs on
              Android phones and iPhones. OPAC lodges a union Catalogue of all
              libraries one is subscribed to and accordingly the searching for a
              book brings results from different libraries as if from a single
              collection. Advanced search options include voice search in around
              60 languages including Malayalam. The cloud database removes the
              need for a local server at the library premises which in turn
              reduces many hassles and costs of installation and maintenance.
            </p>
            <p>
              Libman is a free Android app and any one can install and use it
              once his subscription is authorised by the librarian. Very low
              cost subscription rates to the cloud server for the library is one
              of the major attractions of the application in addition to its
              amazing functionalities. Unlimited users can access and operate it
              simultaneously from anywhere feeling no anxiety of extra charges
              or hidden costs.
            </p>
            <h5>
              <strong>LibMan Suite</strong> comes with three applications:
            </h5>
            <ul>
              <li>
                <Link to="/product-libman/libman">LibMan</Link>
              </li>
              <li>
                <Link to="/product-libman/librarian">LibMan-Librarian</Link>
              </li>
              <li>
                <Link to="/product-libman/cms">LibMan-CMS</Link>
              </li>
            </ul>
            <h5>
              <strong>Give it a try!</strong>
            </h5>
            <p>
              LibMan Suite comes with a lot more features. Some are being added
              and some are in place like My Personal Library.
            </p>
            <p>
              We invite librarians to try LibMan Suite subscribing to one of our
              libraries. We offer libraries a free trial of LibMan Suite for a
              whole month. Please contact us.
            </p>
            <h5>
              <strong>
                Send us a message on WhatsApp to +91-73566-25110 with the
                following details.
              </strong>
            </h5>
            <ul>
              <li>Library Name</li>
              <li>Library Location (Country, State/Region, District/City)</li>
              <li>GPS Location (Optional)</li>
              <li>Library Phone #</li>
              <li>Library Email Address</li>
              <li>Librarian Name</li>
              <li>Email address of the Librarian</li>
              <li>Mobile # of the Librarian</li>
            </ul>
            <p>
              We will send you a mail on how to get started, along with the
              required credentials to try LibMan Suite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibmanSuite;
