import React from "react";
import { client } from "../lib/client";
import { Product, HeroBanner, FooterBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]} />
      {console.log(products)}
      <div>
        <h2 className="products-heading">Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products.map((product) => product.name)}
      </div>
      <FooterBanner />
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerquery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerquery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
