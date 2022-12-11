import * as React from "react";

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import GamesVillage from "../container/gamesvillage";
import { Seo } from "../components/seo";

export const Head = () => <Seo />;

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
