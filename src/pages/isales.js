import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import ISales from "../container/isales";
import { Seo } from "../components/seo";

export const Head = () => <Seo />;

const ProductISales = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "iSales",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <ISales />
    </Layout>
  );
};

export default ProductISales;
