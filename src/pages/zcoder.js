import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import ZCoder from "../container/zcoder";
import { Seo } from "../components/seo";

const ProductZCODER = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "ZCODER",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <ZCoder />
    </Layout>
  );
};

export default ProductZCODER;

export const Head = () => (
  <Seo
    title="ZCoder"
    description="ZCoder, OrniSoft’s flagship product is an Application Development Enhancement Utility that generates 80-90% of the total source code required for a Database Application in almost all the current technologies."
  />
);
