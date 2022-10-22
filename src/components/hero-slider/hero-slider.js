import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";

import { SLIDER_DELAY } from "../../constants";

import "./hero-slider.scss";

const HeroSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: SLIDER_DELAY,
  };

  return (
    <div className="relative">
      <div className="hero-slider">
        <Slider {...settings}>
          <div className="hero-slider__slide ">
            <div className="hero-slider__content ">
              <div class="container">
                <div class="row">
                  <div className="hero-slider__dialog ">
                    <h2 className="hero-slider__title">Product Heading Here</h2>
                    <p className="hero-slider__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae enim aenean sed nunc, euismod in velit malesuada.
                      Duis faucibus morbi consectetur iaculis. In dui urna
                      placerat ut sem imperdiet ultrices urna sollicitudin.
                      Viverra semper quam risus sed magna.
                    </p>
                  </div>
                </div>
              </div>
              <StaticImage
                src="../../images/banner.png"
                alt="banner"
                className="hero-slider__image"
              />
            </div>
          </div>
          <div className="hero-slider__slide ">
            <div className="hero-slider__content ">
              <div class="container">
                <div class="row">
                  <div className="hero-slider__dialog ">
                    <h2 className="hero-slider__title">Product Heading Here</h2>
                    <p className="hero-slider__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae enim aenean sed nunc, euismod in velit malesuada.
                      Duis faucibus morbi consectetur iaculis. In dui urna
                      placerat ut sem imperdiet ultrices urna sollicitudin.
                      Viverra semper quam risus sed magna.
                    </p>
                  </div>
                </div>
              </div>
              <StaticImage
                src="../../images/banner.png"
                alt="banner"
                className="hero-slider__image"
              />
            </div>
          </div>{" "}
          <div className="hero-slider__slide ">
            <div className="hero-slider__content ">
              <div class="container">
                <div class="row">
                  <div className="hero-slider__dialog ">
                    <h2 className="hero-slider__title">Product Heading Here</h2>
                    <p className="hero-slider__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae enim aenean sed nunc, euismod in velit malesuada.
                      Duis faucibus morbi consectetur iaculis. In dui urna
                      placerat ut sem imperdiet ultrices urna sollicitudin.
                      Viverra semper quam risus sed magna.
                    </p>
                  </div>
                </div>
              </div>
              <StaticImage
                src="../../images/banner.png"
                alt="banner"
                className="hero-slider__image"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default HeroSlider;
