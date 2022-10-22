import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";

const ProductJit = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "JIT",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
    </Layout>
  );
};

export default ProductJit;
