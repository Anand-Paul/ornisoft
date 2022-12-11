import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import GamesVillage from "../container/gamesvillage";
import { Seo } from "../components/seo";

const ProductGamesVillage = () => {
  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "GamesVillage",
    },
  ];

  return (
    <Layout>
      <Breadcrumb data={breadcrumbData} />
      <GamesVillage />
    </Layout>
  );
};

export default ProductGamesVillage;

export const Head = () => (
  <Seo
    title="GamesVillage Pro Suite"
    description="GamesVillage Pro Suite is a complete tournament management software which is available on both Android and IOS platforms. "
  />
);
