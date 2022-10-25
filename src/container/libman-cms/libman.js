import React from "react";

import "./libman.scss";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/aboutImage.png";

const LibmanCMS = () => {
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
          <h3 className="product-detail__title">LibMan-CMS</h3>
          <div className="product-detail__desc">
            <p>
              LibMan-CMS is a web-based content management system for desktops
              to build up a library Catalogue and member database. One can
              either enter data afresh or import from other resources and
              databases (csv, Excel, KOHA, etc.). It caters to the
              functionalities found in LM-Librarian, especially Book, Membership
              and Admin maintenance. The LibMan-CMS is hosted on a cloud
              platform and the library staff can access it using browsers
              without the need to install any software application on their PCs
              or Laptops.
            </p>
            <p>
              A bibliographic resource of Malayalam books is integrated into the
              LibMan server that allows librarians to copy data from a union
              Catalogue instead of typing all the details of a book while making
              a Catalogue database. Union Catalogue in the server is
              continuously updated whenever a new title is added in its
              libraries in the network. Likewise, Metadata of books in English
              can be imported through free or paid gateways like OCLC and
              ISBNdb.
            </p>
            <p>
              All the book , member and transaction data are open with
              LibMan-CMS. Authorised personnel in the library are allowed free
              downloading of that data at any time to keep it as a backup or to
              migrate to other ILMS.
            </p>
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

export default LibmanCMS;
