import * as React from "react";

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import ZCoder from "../../container/zcoder";

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
