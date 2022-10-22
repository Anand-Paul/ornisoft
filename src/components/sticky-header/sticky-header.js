import React from "react";

import "./sticky-header.scss";

import searchIcon from "../../images/search.png";

const StickyHeader = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light header__nav sticky-top">
      <div class="container">
        <div className="d-flex align-items-center justify-content-between header__nav-wrapper">
          <button
            class="navbar-toggler d-block d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="header__search ps-4 d-flex d-lg-none align-items-center">
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
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100 justify-content-center my-4 my-lg-0">
            <li class="nav-item me-lg-3">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item me-lg-3">
              <a class="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li class="nav-item me-lg-3">
              <a class="nav-link" href="#products">
                Products
              </a>
            </li>
            <li class="nav-item me-lg-3">
              <a class="nav-link" href="#solutions">
                Solutions
              </a>
            </li>
            <li class="nav-item me-lg-3">
              <a class="nav-link" href="#contact">
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
