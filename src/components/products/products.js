import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { ANIM_DELAY } from "../../constants";

import "./products.scss";

const Products = () => {
  return (
    <div className="products" id="products">
      <div className="container">
        <div className="products__titleWrapper">
          <h2 className="products__title">PRODUCTS</h2>
          <h4 className="products__subTitle">Our Products</h4>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 pb-5">
            <div
              className="products__card"
              data-sal="fade"
              data-sal-delay={ANIM_DELAY}
              data-sal-easing="ease-in-out"
            >
              <StaticImage
                src="../../images/card-primary.png"
                alt="banner"
                className="products__card-image"
              />
              <div className="products__card-content">
                <h6 className="products__card-title">LibMan Suite</h6>
                <p className="products__card-description">
                  Libman is a free Android app and anyone can install and use it
                  once his subscription is authorised by the librarian. Very
                  low-cost subscription rate to the cloud server for the library
                  is one of the major attractions of the application in addition
                  to its amazing functionalities.
                </p>
                <Link className="products__card-link" to="/libman">
                  Learn More
                  <span className="ps-2 icon-ic-next-arrow pe-2"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 pb-5">
            <div
              className="products__card"
              data-sal="fade"
              data-sal-delay={ANIM_DELAY}
              data-sal-easing="ease-in-out"
            >
              <StaticImage
                src="../../images/card-secondary.png"
                alt="banner"
                className="products__card-image"
              />
              <div className="products__card-content">
                <h6 className="products__card-title">GamesVillage Pro Suite</h6>
                <p className="products__card-description">
                  GamesVillage Pro Suite is a complete tournament management
                  software which is available on both Android and IOS platforms.
                  The GamesVillage Pro Suite comes with six applications.
                </p>
                <Link className="products__card-link" to="/gamesvillage">
                  Learn More
                  <span className="ps-2 icon-ic-next-arrow pe-2"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 pb-5">
            <div
              className="products__card"
              data-sal="fade"
              data-sal-delay={ANIM_DELAY}
              data-sal-easing="ease-in-out"
            >
              <StaticImage
                src="../../images/card-secondary.png"
                alt="banner"
                className="products__card-image"
              />
              <div className="products__card-content">
                <h6 className="products__card-title">ZCoder</h6>
                <p className="products__card-description">
                  ZCoder, OrniSoft’s flagship product is an Application
                  Development Enhancement Utility that generates 80-90% of the
                  total source code required for a Database Application in
                  almost all the current technologies. Quite simply, it is a
                  multiplatform ML (AI) based application that does the majority
                  of the coding work for you in a bug free and swift manner. A
                  realization of a beautiful dream that began 8 years ago,
                  ZCoder stands apart in every way when compared with other code
                  generators that are commonly used around the world today.
                </p>
                <Link className="products__card-link" to="/zcoder">
                  Learn More
                  <span className="ps-2 icon-ic-next-arrow pe-2"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 pb-5">
            <div
              className="products__card"
              data-sal="fade"
              data-sal-delay={ANIM_DELAY}
              data-sal-easing="ease-in-out"
            >
              <StaticImage
                src="../../images/card-primary.png"
                alt="banner"
                className="products__card-image"
              />
              <div className="products__card-content">
                <h6 className="products__card-title">VanSales Pro</h6>
                <p className="products__card-description">
                  VanSales Pro is a mobile based solution which can streamline
                  sales and delivery processes in the field. It helps a company
                  to maximize their output from van sales operations and
                  increase the ROI. Various stages of the sale such as planning,
                  stocking, dispatching, tracking and invoicing the van goods
                  are made hassle-free through this solution. It ensures easy
                  inventory management, efficient route optimization,
                  streamlined delivery of goods, and on-the-spot billing. There
                  are two softwares included in this package. One is for the
                  manager and the other is for the drivers/salesman.
                </p>
                <Link className="products__card-link" to="/vansales">
                  Learn More
                  <span className="ps-2 icon-ic-next-arrow pe-2"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 pb-5">
            <div
              className="products__card"
              data-sal="fade"
              data-sal-delay={ANIM_DELAY}
              data-sal-easing="ease-in-out"
            >
              <StaticImage
                src="../../images/card-primary.png"
                alt="banner"
                className="products__card-image"
              />
              <div className="products__card-content">
                <h6 className="products__card-title">RestoManage</h6>
                <p className="products__card-description">
                  RestoManage is a cloud-based online food ordering and delivery
                  system for restaurant businesses. It offers a centralized
                  platform to efficiently manage pickup and delivery orders. The
                  Restaurants can create customized digital menus with food
                  categories, images, and pricing details. They can use custom
                  banners in the app to display offers, information about
                  special dishes etc. It also allows users to receive automated
                  notifications about new orders and accept/reject order
                  requests as per food availability.
                </p>
                <Link className="products__card-link" to="/restomanage">
                  Learn More
                  <span className="ps-2 icon-ic-next-arrow pe-2"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 pb-5">
            <div
              className="products__card"
              data-sal="fade"
              data-sal-delay={ANIM_DELAY}
              data-sal-easing="ease-in-out"
            >
              <StaticImage
                src="../../images/card-primary.png"
                alt="banner"
                className="products__card-image"
              />
              <div className="products__card-content">
                <h6 className="products__card-title">iSales</h6>
                <p className="products__card-description">
                  iSales is an application for sales and delivery of goods via
                  an online store. The store can display images and pricing of
                  the various goods. Customizable banners are used in the app to
                  display offers, information about highlighted products etc.
                  There is also a CMS app for the store owner with which he can
                  add products, change images, edit pricing, availability,
                  create discount notifications/banners etc.
                </p>
                <Link className="products__card-link" to="/isales">
                  Learn More
                  <span className="ps-2 icon-ic-next-arrow pe-2"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
