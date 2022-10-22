import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";

import Libman from "../container/libman";

const ProductLibman = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Libman",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <Libman />
    </Layout>
  );
};

export default ProductLibman;
