import React from "react";

import { ANIM_DELAY } from "../../constants";

import frameLeft from "../../images/contact-right.png";
import frameRight from "../../images/contact-left.png";
import whatsapp from "../../images/whatsapp.png";
import mail from "../../images/mail.png";
import mobile from "../../images/mobile.png";

import "./contact.scss";

const ContactForm = () => {
  return (
    <div
      className="contact"
      id="contact"
      data-sal="fade"
      data-sal-delay={ANIM_DELAY}
      data-sal-easing="ease-in-out"
    >
      <div className="container">
        <img
          className="contact__shapes contact__shapes_left"
          src={frameRight}
          alt="Right asset"
        />
        <img
          className="contact__shapes contact__shapes_right"
          src={frameLeft}
          alt="Left asset"
        />
        <h2 className="contact__title mb-1 mb-md-4">Contact Us</h2>

        <div className="row">
          <div className="col-12">
            <div className="contact__main">
              <div className="contact__main-item">
                <img src={mobile} alt="whatsapp" />
                <a
                  href="tel:+917306684432"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +917306684432
                </a>
              </div>
              <div className="contact__main-item contact__main-item_size">
                <img src={whatsapp} alt="whatsapp" />
                <a
                  href="https://api.whatsapp.com/send?phone=+917306684432&text=Hello!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +917306684432
                </a>
              </div>
              <div className="contact__main-item">
                <img src={mail} alt="whatsapp" />
                <a
                  href="mailto:Info@ornisoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Info@ornisoft.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="contact__card">
              <span className="icon-location-1-2 pe-3 contact__card-icon"></span>
              <div className="contact__card-address">
                OrniSoft <br />
                AMRA 60, Automobile Road Palarivattom, Kochi, Kerala, <br />
                India 682025
                <span className="contact__card-phone">
                  <a href="tel:+917306684432">+917306684432</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="contact__card">
              <span className="icon-location-1-2 pe-3 contact__card-icon"></span>
              <div className="contact__card-address">
                OrniSoft <br />P O Box No 115344, <br />
                Dubai, UAE
                <span className="contact__card-phone">
                  <a href="tel:+971563462929">+971 56 3462929</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="contact__card">
              <span className="icon-location-1-2 pe-3 contact__card-icon"></span>
              <div className="contact__card-address">
                OrniSoft <br />
                P.O.Box : 320, Postal Code 271,
                <br /> Muscat, Oman
                <span className="contact__card-phone">
                  <a href="tel:+96893774669">+96893774669</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
