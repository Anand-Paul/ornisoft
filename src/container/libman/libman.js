import React from "react";

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
            <p>
              LibMan is the OPAC and search interface for the subscribers of the
              library that works on Android and iPhone mobiles. It automatically
              finds all subscriptions in various libraries of the current user.
              LibMan comes with advanced search facilities and includes voice
              search in 60+ languages.
            </p>
            <p>
              LibMan allows its users to create his/her own virtual library by
              adding books from different libraries. They can create personal
              shelves and manage favourite books in the virtual library.
            </p>
            <p>
              Subscribers of a library can request for a book, request the
              return, etc. through the LibMan. The subscriber will be notified
              whenever there is an activity initiated from the LibMan-Librarian
              App related to the current user.
            </p>
            <p>Some of the functionalities of the LibMan app are:</p>
            <ul>
              <li>Search and Retrieval (OPAC)</li>
              <li>Search for a library</li>
              <li>Memberships</li>
              <li>Books in Hand</li>
              <li>Books Requested</li>
              <li>Requests for Books Return</li>
              <li>Message Inbox</li>
              <li>Upcoming Library Events</li>
              <li>My Virtual Library</li>
              <li>Highlighted Books</li>
              <li>History</li>
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
