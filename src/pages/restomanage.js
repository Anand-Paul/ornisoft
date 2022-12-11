import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import RestoManage from "../container/restomanage";
import { Seo } from "../components/seo";

export const Head = () => <Seo />;

const ProductRestoManage = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "RestoManage",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <RestoManage />
    </Layout>
  );
};

export default ProductRestoManage;
