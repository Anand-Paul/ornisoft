import * as React from "react";

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import DBAnalyzer from "../../container/db-analyzer";

const ProductDBAnalyzer = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "ZCODER",
      link: "/product-zcoder/zcoder",
    },
    {
      id: 3,
      name: "DB Analyzer",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <DBAnalyzer />
    </Layout>
  );
};

export default ProductDBAnalyzer;
