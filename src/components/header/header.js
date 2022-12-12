import React from "react";
import { Link } from "gatsby";

import "./header.scss";

import logo from "../../images/logo.svg";

const Header = (props) => {
  const { stickyHeader } = props;
  return (
    <header
      className={`header bg-white ${!stickyHeader ? "border-bottom" : null}`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/">
          <img src={logo} alt="ornisoft logo" className="header__logo" />
        </Link>
        <div className="header__contact d-none d-xl-flex align-items-center flex-grow-1 flex-shrink-0 justify-content-end px-4 border-end">
          <div className="header__email d-flex align-items-center pe-4 border-end">
            <div className="header__icon me-3">
              <span className="icon-ic-mail fs-4"></span>
            </div>
            <div className="header__emailContentWrapper">
              <div className="header__title fs-6 fw-bold">Email</div>
              <a
                href="mailto:Info@ornisoft.com"
                className="header__link text-decoration-none"
              >
                Info@ornisoft.com
              </a>
            </div>
          </div>
          <div className="header__contact d-flex align-items-center ps-4">
            <div className="header__icon me-3">
              <span className="icon-ic-phone fs-4"></span>
            </div>
            <div className="phoneContactWrapper">
              <div className="header__title fs-6 fw-bold">Contact</div>
              <a
                href="tel:+917306684432"
                className="header__link text-decoration-none"
              >
                +917306684432
              </a>
            </div>
          </div>
        </div>
        {/* Search is currently hided */}
        {/* <div className="header__search px-4 border-end d-none d-lg-flex align-items-center flex-grow-0">
          <div className="input-group flex-nowrap align-items-center">
            <input
              className="header__input shadow-none border-bottom form-control"
              type="text"
            />
            <span className="header__icon">
              <span className="icon-ic-search fs-4"></span>
            </span>
          </div>
        </div> */}
        <ul
          className="header__socialShare list-unstyled mb-0 d-flex align-items-center justify-content-end ps-lg-4 flex-grow
        1"
        >
          <li className="header__link header__link_insta me-3">
            <a
              href="https://www.instagram.com/OrniSoftIndia/"
              className="text-decoration-none fs-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-ic-instagram-transparent header__link_insta"></span>
            </a>
          </li>
          <li className="header__link header__link_fb me-3">
            <a
              href="https://www.facebook.com/profile.php?id=100087601533710"
              className="text-decoration-none fs-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-ic-fb"></span>
            </a>
          </li>
          {/* <li className="header__link header__link_twitter me-3">
            <a
              href="/"
              className="text-decoration-none fs-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-ic-twitter"></span>
            </a>
          </li> */}
          <li className="header__link header__link_youtube">
            <a
              href="https://youtube.com/channel/UCyevFr4RSwjurI6AGpgGOLQ"
              className="text-decoration-none fs-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-ic-youtube"></span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
