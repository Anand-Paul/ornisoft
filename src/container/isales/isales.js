import React from "react";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/aboutImage.png";

const ISales = () => {
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
          <h3 className="product-detail__title">iSales</h3>
          <div className="product-detail__desc">
            <p>
              iSales is an application for sales and delivery of goods via an
              online store. The store can display images and pricing of the
              various goods. Customizable banners are used in the app to display
              offers, information about highlighted products etc. There is also
              a CMS app for the store owner with which he can add products,
              change images, edit pricing, availability, create discount
              notifications/banners etc. The features of the iSales app are as
              below.
            </p>

            <h4>Digital menu system</h4>
            <p>A digital menu with customizable images, price, quantity etc.</p>
            <h4>Cart feature</h4>
            <p>
              The users can add items in the menu to the cart before making a
              final purchase.
            </p>
            <h4>Custom banners</h4>
            <p>
              The user can see tailor-made banners to display offers,
              information about special products etc.
            </p>
            <h4>Discount management </h4>
            <p>
              The option to calculate and apply discounts before the final bill
              is available in the app.
            </p>
            <h4>E-payment</h4>
            <p>
              Integrated payment gateway helps the user to pay using e-payment
              methods which makes the payment process hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISales;
