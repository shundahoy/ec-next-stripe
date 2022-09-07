import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner, MainVisual } from "../components";

const Home = ({ products, bannerData, mainData }) => {
  return (
    <div>
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
      <MainVisual data={mainData} />
      <div className="products-heading">
        <h2>Products</h2>
        <p>商品一覧</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const mainQuery = '*[_type == "mainVisual"]';
  const mainData = await client.fetch(mainQuery);

  return {
    props: { products, bannerData, mainData },
  };
};

export default Home;
