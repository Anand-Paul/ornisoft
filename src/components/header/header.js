import React from "react";

import "./header.scss";

import logo from "../../images/logo.png";
import emailIcon from "../../images/email.png";
import phoneIcon from "../../images/phone.png";
import searchIcon from "../../images/search.png";
import instaIcon from "../../images/logo--instagram.png";
import fbIcon from "../../images/logo--facebook.png";
import twitterIcon from "../../images/logo--twitter.png";
import youtubeIcon from "../../images/logo--youtube.png";

const Header = () => {
  return (
    <header className="header py-3 bg-white">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
        <div className="header__contactWrapper d-none d-xl-flex align-items-center flex-grow-1 flex-shrink-0 justify-content-end px-4 border-end">
          <div className="header__email d-flex align-items-center pe-4 border-end">
            <div className="header__icon me-3">
              <img src={emailIcon} alt="Email Icon" />
            </div>
            <div className="header__emailContentWrapper">
              <div className="header__title fs-6 fw-bold">Email</div>
              <a
                className="header__link text-decoration-none"
                href="mailto:testemail@gmail.com"
              >
                testemail@gmail
              </a>
            </div>
          </div>
          <div className="header__contact d-flex align-items-center ps-4">
            <div className="header__icon me-3">
              <img src={phoneIcon} alt="Phone Icon" />
            </div>
            <div className="phoneContactWrapper">
              <div className="header__title fs-6 fw-bold">Contact</div>
              <a
                className="header__link text-decoration-none"
                href="tel:+91 88998877655"
              >
                +91 8899887765
              </a>
            </div>
          </div>
        </div>
        <div className="header__search px-4 border-end d-none d-lg-flex align-items-center">
          <div class="input-group flex-nowrap">
            <input
              className="header__input shadow-none border-bottom"
              type="text"
              class="form-control"
            />
            <span className="header__icon">
              <img src={searchIcon} alt="search icon" />
            </span>
          </div>
        </div>
        <ul className="header__socialShare list-unstyled mb-0 d-flex align-items-center justify-content-end ps-4">
          <li className="header__link header__link_insta me-3">
            <a href="#">
              <img src={instaIcon} alt="" />
            </a>
          </li>
          <li className="header__link header__link_fb me-3">
            <a href="#">
              <img src={fbIcon} alt="" />
            </a>
          </li>
          <li className="header__link header__link_twitter me-3">
            <a href="#">
              <img src={twitterIcon} alt="" />
            </a>
          </li>
          <li className="header__link header__link_youtube">
            <a href="#">
              <img src={youtubeIcon} alt="" />
            </a>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Header;
