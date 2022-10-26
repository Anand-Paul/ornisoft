import React from "react";

import "./libman.scss";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/aboutImage.png";

const LibmanLibrarian = () => {
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
          <h3 className="product-detail__title">LibMan-Librarian</h3>
          <div className="product-detail__desc">
            <p>
              LM-Librarian is also a mobile app but for librarians to process
              issues, returns, etc. Its activities include:
            </p>
            <ul>
              <li>Admin Maintenance</li>
              <li>Membership and Subscription Fee</li>
              <li>Book Requests processing</li>
              <li>Book Issue and Return processing</li>
              <li>Overdue Books</li>
              <li>Mail Templates and Chats</li>
              <li>Book Maintenance</li>
              <li>Event Maintenance</li>
              <li>Generating Reports and Charts</li>
            </ul>
            <p>
              The LM-Librarian comes with push notifications for book requests,
              book return requests, payments, etc.
            </p>
            <p>
              Advanced reports and charts are included which can be either
              viewed or downloaded as PDF documents. Additional features in
              reporting are added every now and then with requests from
              librarians.
            </p>
            <p>
              Ability to use the LM-Librarian by multiple librarians/library
              staff (authorised by the main librarian) is another major
              functionality. LM-Librarian uses mobile phone number verification
              to login to the system.
            </p>
            <p>
              Features of the LM-Librarian are interconnected with LibMan-CMS,
              the third module of the App.
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

export default LibmanLibrarian;
