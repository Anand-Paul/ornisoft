import React from "react";
import { Link } from "gatsby";

import logo from "../../images/logo-white.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="footer__widget">
                <div className="footer__widget-social me-5  ">
                  <figure className="footer__logo">
                    <img src={logo} alt="ornisoft footer logo" />
                  </figure>
                  <div>
                    <a
                      href="https://www.instagram.com/OrniSoftIndia/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon icon-ic-facebook-transparent pe-2"></span>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100087601533710"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon icon-ic-instagram-transparent pe-2"></span>
                    </a>
                    {/* <a href="/" target="_blank" rel="noopener noreferrer">
                        <span className="icon-ic-twitter-transparent pe-2"></span>
                      </a> */}
                    <a
                      href="https://youtube.com/channel/UCyevFr4RSwjurI6AGpgGOLQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon-ic-youtube-transparent pe-2"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer__widget">
                <div className="footer__menu footer__menu--1">
                  <h4 className="footer__widget-title">OUR PRODUCTS</h4>
                  <ul className="footer__widget-list">
                    <li className="footer__widget-items">
                      <Link to="/libman">Libman Suite</Link>
                    </li>
                    <li className="footer__widget-items">
                      <Link to="/gamesvillage">GamesVillage Pro Suite</Link>
                    </li>
                    <li className="footer__widget-items">
                      <Link to="/zcoder">ZCODER</Link>
                    </li>
                    <li className="footer__widget-items">
                      <Link to="/vansales">VanSales Pro</Link>
                    </li>
                    <li className="footer__widget-items">
                      <Link to="/restomanage">RestoManage</Link>
                    </li>
                    <li className="footer__widget-items">
                      <Link to="/isales">iSales</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="footer__widget">
                <div className="footer__menu no-padding">
                  <h4 className="footer__widget-title">GET IN TOUCH</h4>
                  <ul className="footer__widget-list">
                    <li className="footer__widget-items">
                      <span className="icon  icon-Vector-7 pe-3"></span>
                      <a href="mailto:Info@ornisoft.com">Info@ornisoft.com</a>
                    </li>
                    <li className="footer__widget-items footer__widget-items_border mb-3">
                      <span className="icon-location-1-2 pe-3"></span>
                      OrniSoft AMRA 60, Automobile Road Palarivattom, Kochi,
                      Kerala, India 682025
                      <span className="footer__widget-items-phone">
                        <a href="tel:+917306684432">+917306684432</a>
                      </span>
                    </li>
                    <li className="footer__widget-items footer__widget-items_border mb-3">
                      <span className="icon-location-1-2 pe-3"></span>OrniSoft P
                      O Box No 115344, Dubai UAE
                      <span className="footer__widget-items-phone">
                        <a href="tel:+971563462929">+971 56 3462929</a>
                      </span>
                    </li>
                    <li className="footer__widget-items ">
                      <span className="icon-location-1-2 pe-3"></span>OrniSoft
                      P.O.Box : 320 Postal Code 271 Muscat Oman
                      <span className="footer__widget-items-phone">
                        <a href="tel:+96893774669">+96893774669</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mini">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer__copyright">
                <p className="footer__copyright-text">
                  Ornisoft. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
