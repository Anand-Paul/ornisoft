import * as React from "react";

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import LibmanLibrarian from "../../container/libman-librarian/libman";

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
      name: "Librarian",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <LibmanLibrarian />
    </Layout>
  );
};

export default ProductLibman;
