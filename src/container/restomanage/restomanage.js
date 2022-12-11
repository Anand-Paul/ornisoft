import React from "react";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/restomanage.jpg";

const RestoManage = () => {
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
          <h3 className="product-detail__title">RestoManage</h3>
          <div className="product-detail__desc">
            <p>
              RestoManage is a cloud-based online food ordering and delivery
              system for restaurant businesses. It offers a centralized platform
              to efficiently manage pickup and delivery orders. The Restaurants
              can create customized digital menus with food categories, images,
              and pricing details. They can use custom banners in the app to
              display offers, information about special dishes etc. It also
              allows users to receive automated notifications about new orders
              and accept/reject order requests as per food availability.
            </p>
            <p>Some features of the RestoManage include,</p>
            <h4>Digital menu system</h4>
            <p>
              A digital menu with customizable images, price, quantity etc. The
              users can add items in the menu to the cart before making a final
              purchase
            </p>
            <h4>Geo-fencing-based order management</h4>
            <p>
              The delivery is supported for those orders which are within a
              certain geographical radius of the restaurant. This limit can be
              set by the restaurant.
            </p>
            <h4>Customizable banners</h4>
            <p>
              The restaurant can add custom banners to display offers,
              information about special dishes etc.
            </p>
            <h4>Discount management </h4>
            <p>
              The option to calculate and apply discounts before the final bill
              is available in the app.
            </p>
            <h4>Real-time order tracking</h4>
            <p>
              Live tracking of orders is implemented in the app. Data is
              synchronized along multiple devices while doing this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestoManage;
