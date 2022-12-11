import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import RestoManage from "../container/restomanage";
import { Seo } from "../components/seo";

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

export const Head = () => (
  <Seo
    title="RestoManage"
    description="RestoManage is a cloud-based online food ordering and delivery system for restaurant businesses."
  />
);
