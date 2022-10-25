import * as React from "react";

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";

import LibmanCMS from "../../container/libman-cms/libman";

const ProductLibman = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Libman Suite",
      link: "/product-libman/libman-suite",
    },
    {
      id: 3,
      name: "CMS",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <LibmanCMS />
    </Layout>
  );
};

export default ProductLibman;
