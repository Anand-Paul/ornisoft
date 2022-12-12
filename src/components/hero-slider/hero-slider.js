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
    <div className="relative" id="heroSlider">
      <div className="hero-slider">
        <Slider {...settings}>
          <div className="hero-slider__slide ">
            <div className="hero-slider__content ">
              <div className="container">
                <div className="row">
                  <div className="hero-slider__dialog ">
                    <h2 className="hero-slider__title">LibMan Suite</h2>
                    <p className="hero-slider__description">
                      Libman is a free Android app and anyone can install and
                      use it once his subscription is authorised by the
                      librarian. Very low-cost subscription rate to the cloud
                      server for the library is one of the major attractions of
                      the application in addition to its amazing
                      functionalities.
                    </p>
                  </div>
                </div>
              </div>
              <StaticImage
                src="../../images/libman.jpg"
                alt="banner"
                className="hero-slider__image"
              />
            </div>
          </div>
          <div className="hero-slider__slide ">
            <div className="hero-slider__content ">
              <div className="container">
                <div className="row">
                  <div className="hero-slider__dialog ">
                    <h2 className="hero-slider__title">
                      Games Village Pro Suite
                    </h2>
                    <p className="hero-slider__description">
                      GamesVillage Pro is a complete tournament manager app (IOS
                      and Android) which can power up smartphones to manage
                      games, accommodation, transportation, food details etc
                      associated with tournaments.
                    </p>
                  </div>
                </div>
              </div>
              <StaticImage
                src="../../images/games-village.jpg"
                alt="banner"
                className="hero-slider__image"
              />
            </div>
          </div>
          <div className="hero-slider__slide ">
            <div className="hero-slider__content ">
              <div className="container">
                <div className="row">
                  <div className="hero-slider__dialog ">
                    <h2 className="hero-slider__title">ZCoder</h2>
                    <p className="hero-slider__description">
                      ZCoder, OrniSoft’s flagship product is an Application
                      Development Enhancement Utility that generates 80-90% of
                      the total source code required for a Database Application
                      in almost all the current technologies.
                    </p>
                  </div>
                </div>
              </div>
              <StaticImage
                src="../../images/zcoder.jpg"
                alt="banner"
                className="hero-slider__image"
              />
            </div>
          </div>
          <div className="hero-slider__slide ">
            <div className="hero-slider__content ">
              <div className="container">
                <div className="row">
                  <div className="hero-slider__dialog ">
                    <h2 className="hero-slider__title">VanSales Pro</h2>
                    <p className="hero-slider__description">
                      VanSales Pro is a mobile based solution which can
                      streamline sales and delivery processes in the
                      field.Various stages of the sale such as planning,
                      stocking, dispatching, tracking and invoicing the van
                      goods are made hassle-free through this solution.
                    </p>
                  </div>
                </div>
              </div>
              <StaticImage
                src="../../images/vansales.jpg"
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
