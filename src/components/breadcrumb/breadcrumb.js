import React from "react";
import { Link } from "gatsby";

import "./breadcrumb.scss";

const Breadcrumb = (props) => {
  const { data } = props;

  return (
    <div className="container d-flex align-items-center justify-content-between mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {data?.map((item, index) => {
            if (data?.length === index + 1) {
              return (
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  key={item.name + index}
                >
                  {item?.name}
                </li>
              );
            }
            return (
              <li className="breadcrumb-item" key={item.name + index}>
                <Link to={item?.link}>{item?.name}</Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
