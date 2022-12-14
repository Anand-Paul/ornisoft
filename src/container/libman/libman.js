import React from "react";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/libman.jpg";

const Libman = () => {
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
          <h4>LibMan</h4>
          <div className="product-detail__desc">
            <h5>What is LibMan Suite?</h5>
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
              <li>LibMan</li>
              <li>LibMan-Librarian</li>
              <li>LibMan-CMS</li>
            </ul>
            <h5>LibMan</h5>
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
            <h5>LibMan-Librarian</h5>
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
            <h5>LibMan-CMS</h5>
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

export default Libman;
