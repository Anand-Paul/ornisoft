import * as React from "react";

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";

import LibmanSuite from "../../container/libman-suite/libman";

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
      <LibmanSuite />
    </Layout>
  );
};

export default ProductLibman;
