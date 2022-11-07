import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import VanSales from "../container/vansales";

const ProductVanSales = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "VanSales",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <VanSales />
    </Layout>
  );
};

export default ProductVanSales;
