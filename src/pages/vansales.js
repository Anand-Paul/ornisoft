import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import VanSales from "../container/vansales";
import { Seo } from "../components/seo";

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

export const Head = () => (
  <Seo
    title="VanSales Pro"
    description="VanSales Pro is a mobile based solution which can streamline sales and delivery processes in the field."
  />
);
