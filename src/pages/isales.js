import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import ISales from "../container/isales";
import { Seo } from "../components/seo";

import isales from "../images/isales.jpg";

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

export const Head = () => (
  <Seo
    title="iSales"
    description="iSales is an application for sales and delivery of goods via an online store. The store can display images and pricing of the various goods."
    defaultImage={isales}
  />
);
