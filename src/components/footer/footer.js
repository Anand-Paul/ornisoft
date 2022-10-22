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
                    <Link to="#">
                      <span className="icon icon-logo--facebook pe-2"></span>
                    </Link>
                    <Link to="#">
                      <span className="icon icon-logo--instagram pe-2"></span>
                    </Link>
                    <Link to="#">
                      <span className="icon icon-logo--twitter pe-2"></span>
                    </Link>
                    <Link to="#">
                      <span className="icon-logo--youtube pe-2"></span>
                    </Link>
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
                      <Link to="/product-jit">JIT</Link>
                    </li>
                    <li className="footer__widget-items">
                      <Link to="/product-db-analyzer">DB Analyzer</Link>
                    </li>
                    <li className="footer__widget-items">
                      <Link to="/product-zcoder">ZCODER</Link>
                    </li>
                    <li className="footer__widget-items">
                      <Link to="/product-zerp">ZERP</Link>
                    </li>
                    <li className="footer__widget-items">
                      <Link to="/product-libman">LibMan</Link>
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
                      <span className="icon icon-logo-mail pe-3"></span>
                      <Link to="mailto:testemail@gmail.com">
                        testemail@gmail.com
                      </Link>
                    </li>
                    <li className="footer__widget-items">
                      <span className="icon icon-logo-phone pe-3"></span>
                      AMRA 60, Automobile Road Palarivattom, Kochi, Kerala,
                      India 682025
                    </li>
                    <li className="footer__widget-items">
                      <span className="icon icon-logo-location pe-3"></span>
                      <Link to="tel:+918899887765">+91 8899887765</Link>
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
