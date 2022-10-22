import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";

const ProductDBAnalyzer = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "DB Analyzer",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
    </Layout>
  );
};

export default ProductDBAnalyzer;
