import React, { useContext } from "react";
import { PRODUCT_CONTEXT } from "../App";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const {state:{products}} = useContext(PRODUCT_CONTEXT);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {products.map((product,index) => <ProductCard key={index} product={product}/>)}
    </div>
  );
};

export default Home;
