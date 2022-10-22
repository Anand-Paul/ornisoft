import React from "react";
import { Link } from "gatsby";

import "./header.scss";

import logo from "../../images/logo.svg";
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
        <Link to="/">
          <img src={logo} alt="ornisoft logo" className="header__logo" />
        </Link>
        <div className="header__contactWrapper d-none d-xl-flex align-items-center flex-grow-1 flex-shrink-0 justify-content-end px-4 border-end">
          <div className="header__email d-flex align-items-center pe-4 border-end">
            <div className="header__icon me-3">
              <img src={emailIcon} alt="Email Icon" />
            </div>
            <div className="header__emailContentWrapper">
              <div className="header__title fs-6 fw-bold">Email</div>
              <Link
                to="mailto:testemail@gmail.com"
                className="header__link text-decoration-none"
              >
                testemail@gmail
              </Link>
            </div>
          </div>
          <div className="header__contact d-flex align-items-center ps-4">
            <div className="header__icon me-3">
              <img src={phoneIcon} alt="Phone Icon" />
            </div>
            <div className="phoneContactWrapper">
              <div className="header__title fs-6 fw-bold">Contact</div>
              <a
                href="tel:+9188998877655"
                className="header__link text-decoration-none"
              >
                +91 8899887765
              </a>
            </div>
          </div>
        </div>
        <div className="header__search px-4 border-end d-none d-lg-flex align-items-center">
          <div className="input-group flex-nowrap">
            <input
              className="header__input shadow-none border-bottom form-control"
              type="text"
            />
            <span className="header__icon">
              <img src={searchIcon} alt="search icon" />
            </span>
          </div>
        </div>
        <ul className="header__socialShare list-unstyled mb-0 d-flex align-items-center justify-content-end ps-4">
          <li className="header__link header__link_insta me-3">
            <Link to="/">
              <img src={instaIcon} alt="" />
            </Link>
          </li>
          <li className="header__link header__link_fb me-3">
            <Link to="/">
              <img src={fbIcon} alt="" />
            </Link>
          </li>
          <li className="header__link header__link_twitter me-3">
            <Link to="/">
              <img src={twitterIcon} alt="" />
            </Link>
          </li>
          <li className="header__link header__link_youtube">
            <Link to="/">
              <img src={youtubeIcon} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
