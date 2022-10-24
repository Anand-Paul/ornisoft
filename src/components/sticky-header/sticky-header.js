import React from "react";

import "./sticky-header.scss";

const StickyHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header__nav sticky-top">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between header__nav-wrapper">
          <button
            className="navbar-toggler d-block d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="header__search ps-4 d-flex d-lg-none align-items-center">
            <div className="input-group flex-nowrap align-items-center">
              <input
                className="header__input shadow-none border-bottom form-control"
                type="text"
              />
              <span className="header__icon">
              <span className="icon-ic-search fs-4"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-center my-4 my-lg-0">
            <li className="nav-item me-lg-3">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-lg-3">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item me-lg-3">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item me-lg-3">
              <a className="nav-link" href="#solutions">
                Solutions
              </a>
            </li>
            <li className="nav-item me-lg-3">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StickyHeader;
