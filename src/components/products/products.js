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
                <h6 className="products__card-title">ZCODER</h6>
                <p className="products__card-description">
                  ZCoder allows a programmer to generate templates for a web
                  based or mobile based application in the language he/she
                  prefer thereby significantly reducng the time taken to
                  complete a project. It not only makes his/her work easy and
                  fast, but also results in error free coding hence, giving the
                  coder confidence to even take on complicated projects that
                  were otherwise beyond his/her realm of expertise.
                </p>
                <Link className="products__card-link" to="/">
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
                <h6 className="products__card-title">FORECASTING</h6>
                <p className="products__card-description">
                  Forecasting takes up an indispensable role in data analytics
                  these days as it is an important aid to effective and
                  efficient planning. Ornisoft offers a variety of forecasting
                  models for our clients on the basis of their businesses’ past
                  trends and existing conditions and parameters. Whether the
                  forecasts are required several years in advance or a few
                  minutes beforehand and whatever be the circumstance or time
                </p>
                <Link className="products__card-link" to="/">
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
                <h6 className="products__card-title">ZCODER</h6>
                <p className="products__card-description">
                  ZCoder allows a programmer to generate templates for a web
                  based or mobile based application in the language he/she
                  prefer thereby significantly reducng the time taken to
                  complete a project. It not only makes his/her work easy and
                  fast, but also results in error free coding hence, giving the
                  coder confidence to even take on complicated projects that
                  were otherwise beyond his/her realm of expertise.
                </p>
                <Link className="products__card-link" to="/">
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
                <h6 className="products__card-title">FORECASTING</h6>
                <p className="products__card-description">
                  Forecasting takes up an indispensable role in data analytics
                  these days as it is an important aid to effective and
                  efficient planning. Ornisoft offers a variety of forecasting
                  models for our clients on the basis of their businesses’ past
                  trends and existing conditions and parameters. Whether the
                  forecasts are required several years in advance or a few
                  minutes beforehand and whatever be the circumstance or time
                </p>
                <Link className="products__card-link" to="/">
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
