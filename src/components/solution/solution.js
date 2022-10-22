import React from "react";

import "./solution.scss";

import { ANIM_DELAY } from "../../constants";

const Solution = ({ title, img, desc }) => {
  return (
    <div className="solution">
      <div
        className="solution__content"
        data-sal="fade"
        data-sal-delay={ANIM_DELAY}
        data-sal-easing="ease-in-out"
      >
        <figure className="solution__figure">
          <img src={img} alt="forecasting" />
        </figure>
        <div className="solution__inner">
          <h3 className="solution__title">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
