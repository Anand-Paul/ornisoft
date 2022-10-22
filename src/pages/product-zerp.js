import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import Zerp from "../container/zerp";

const ProductZERP = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "ZERP",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <Zerp />
    </Layout>
  );
};

export default ProductZERP;
