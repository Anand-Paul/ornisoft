import React from "react";

import "./footer.scss";
import logo from "../../images/logo.png";
const Footer = () => {
  return (<>
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
                    <a href="#"> <span className="icon icon-ic-facebook-transparent pe-2"></span></a>
                    <a href="#"><span className="icon icon-ic-instagram-transparent pe-2"></span></a>
                    <a href="#"><span className="icon-ic-twitter-transparent pe-2"></span></a>
                    <a href="#"> <span className="icon-ic-youtube-transparent pe-2"></span></a>
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
                      <a href="#">Product Name1</a>
                    </li>
                    <li class="footer__widget-items">
                      <a href="#">Product Name2</a>
                    </li>
                    <li class="footer__widget-items">
                      <a href="#">Product Name3</a>
                    </li>
                    <li class="footer__widget-items">
                      <a href="#">Product Name4</a>
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
                      <span className="icon-ic-mail pe-3"></span>

                      <a href="#">testemail@gmail.com</a>
                    </li>
                    <li class="footer__widget-items">
                      <span className="  icon-location-1-2 pe-3"></span>

                      <a href="#">AMRA 60, Automobile Road
                        Palarivattom,
                        Kochi, Kerala, India 682025</a>
                    </li>

                    <li class="footer__widget-items">
                      <span className="icon-ic-phone pe-3"></span>

                      <a href="#">+91 8899887765</a>
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
                  <a href="#">Ornisoft. All Rights Reserved</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </>);
};

export default Footer;
