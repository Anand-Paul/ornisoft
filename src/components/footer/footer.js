import React from "react";
import { Link } from "gatsby";

import logo from "../../images/logo.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__main">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <div class="footer__widget">
                <div class="footer__widget-social me-5  ">
                  <figure>
                    <img src={logo} alt="LOGO" />
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
            <div class="col-md-3 col-sm-6">
              <div class="footer__widget">
                <div class="footer__menu footer__menu--1">
                  <h4 class="footer__widget-title">OUR PRODUCTS</h4>
                  <ul class="footer__widget-list">
                    <li class="footer__widget-items">
                      <Link to="/product-jit">JIT</Link>
                    </li>
                    <li class="footer__widget-items">
                      <Link to="/product-db-analyzer">DB Analyzer</Link>
                    </li>
                    <li class="footer__widget-items">
                      <Link to="/product-zcoder">ZCODER</Link>
                    </li>
                    <li class="footer__widget-items">
                      <Link to="/product-zerp">ZERP</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="footer__widget">
                <div class="footer__menu no-padding">
                  <h4 class="footer__widget-title">GET IN TOUCH</h4>
                  <ul class="footer__widget-list">
                    <li class="footer__widget-items">
                      <span className="icon icon-logo-mail pe-3"></span>
                      <Link to="mailto:testemail@gmail.com">
                        testemail@gmail.com
                      </Link>
                    </li>
                    <li class="footer__widget-items">
                      <span className="icon icon-logo-phone pe-3"></span>
                      AMRA 60, Automobile Road Palarivattom, Kochi, Kerala,
                      India 682025
                    </li>
                    <li class="footer__widget-items">
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
      <div class="footer-mini">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="footer__copyright">
                <p class="footer__copyright-text">
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
