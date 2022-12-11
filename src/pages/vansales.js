import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import VanSales from "../container/vansales";
import { Seo } from "../components/seo";

export const Head = () => <Seo />;

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
