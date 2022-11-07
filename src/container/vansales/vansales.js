import React from "react";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/aboutImage.png";

const VanSales = () => {
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
          <h3 className="product-detail__title">VanSales Pro</h3>
          <div className="product-detail__desc">
            <p>
              VanSales Pro is a mobile based solution which can streamline sales
              and delivery processes in the field. It helps a company to
              maximize their output from van sales operations and increase the
              ROI. Various stages of the sale such as planning, stocking,
              dispatching, tracking and invoicing the van goods are made
              hassle-free through this solution. It ensures easy inventory
              management, efficient route optimization, streamlined delivery of
              goods, and on-the-spot billing. There are two softwares included
              in this package. One is for the manager and the other is for the
              drivers/salesman. The manager can keep track of the sales as well
              as get statistical information about the cash sales, credit sales,
              fuel charges, maintenance charges, driver salary etc. The unique
              features of VanSales Pro are as follows.
            </p>
            <h4>Stock inventory</h4>
            <p>
              The inventory of the stocks is managed effortlessly by keeping
              real-time tracking of each van and warehouse inventory.
            </p>
            <h4>Loading and Unloading</h4>
            <p>
              Efficient handling of Loading and Unloading requests,
              confirmation/approval, creation and management of picklists,
              inventory transfers etc.
            </p>
            <h4>Van Stock management</h4>
            <p>
              After each transaction, the inventory stock data is updated
              automatically. It helps to reduce the chance for mismatched
              inventories or out of stock goods.
            </p>
            <h4>Stock-based delivery</h4>
            <p>
              Stock-based deliveries can be facilitated through the application.
              Electronic proof of delivery (ePOD) is collected and remote
              invoicing can be done.
            </p>
            <h4>Order management</h4>
            <p>
              Hassle-free order management to give better service to the
              customers.
            </p>
            <h4>Invoicing</h4>
            <p>
              On-the-spot billing and invoicing is done for each sale directly
              from the van itself.
            </p>
            <h4>Tracking</h4>
            <p>
              Track the live location of the vans using geo-tracking. The
              drivers can also prioritize the customers based on the customer
              location data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanSales;
