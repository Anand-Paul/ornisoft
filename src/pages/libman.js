import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import Libman from "../container/libman";
import { Seo } from "../components/seo";

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

export const Head = () => (
  <Seo
    title="LibMan Suite"
    description="Libman is a free Android app and anyone can install and use it once his subscription is authorised by the librarian. Very low-cost subscription rate to the cloud server for the library is one of the major attractions of the application in addition to its amazing functionalities."
  />
);
