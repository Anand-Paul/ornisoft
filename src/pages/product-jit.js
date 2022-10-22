import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";

import Jit from "../container/jit";

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
      <Jit />
    </Layout>
  );
};

export default ProductJit;
