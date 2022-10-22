import React from "react";

import Solution from "../solution";

import { ANIM_DELAY } from "../../constants";
import forecasting from "./../../images/sol-forecasting.jpg";
import mining from "./../../images/sol-data-mining.jpg";
import consultancy from "./../../images/sol-consultancy.jpg";

import "./solutions.scss";
const Solutions = () => {
  return (
    <div className="solutions" id="solutions">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <div
          className="solutions__content"
          data-sal="zoom-in"
          data-sal-delay={ANIM_DELAY}
          data-sal-easing="ease-in-out"
        >
          <h2 className="solutions__overtitle mb-0">Solution</h2>
          <h3 className="solutions__title">Our Solutions</h3>
          <div className="solutions__desc">
            <p>
              Orniosoft provides a whole spectrum of solutions to aid your
              business and improve its productivity significantly. Being experts
              in Data Analytics, AI based innovations, we delve deeper than
              anyone else to make sure what you get from is unparalleled
              excellence in whatever solutions offer. Our existing solutions
              include Forecasting, Data Mining, and Software Consultancy, to
              name a few.
            </p>
          </div>
          <Solution
            title="FORECASTING"
            desc="Forecasting takes up an indispensable role in data analytics these days as it is an important aid to effective and efficient planning. Ornisoft offers a variety of forecasting models for our clients on the basis of their businesses’ past trends and existing conditions and parameters. Whether the forecasts are required several years in advance or a few minutes beforehand and whatever be the circumstance or time constraints, we have got it all covered."
            img={forecasting}
          />
          <Solution
            title="DATA MINING"
            desc="In every second, your business generates large quantities of data that can influence and optimise decision making. Our Data Mining software will look for patterns in large batches of data, and help businesses learn more about their customers so that they can develop more effective marketing strategies, increase sales and decrease costs."
            img={mining}
          />
          <Solution
            title="CONSULTANCY"
            desc="At Ornisoft, we promise you end-to-end software consulting and training solutions. Right from the conception of the software, to planning, to implementing, we take care of everything. Taking into consideration the specifics of your company, we offer individualised solutions that meet your requirements the most."
            img={consultancy}
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
