import React from "react";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/ProductProvder";
const Cart = () => {
  const {state:{cart,loading,error}} = useProductContext();

  let content;
  if (loading) {
    content = <p>Loading...</p>
  }
  if (error) {
    content = <p>Something went wrong...</p>
  }
  if (!loading && !error && cart.length == 0) {
    content = <p>Nothing to show</p>
  }
  if (!loading && !error && cart.length) {
    content = <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {cart.map((product, index) => <ProductCard key={index} product={product} />)}
    </div>
  }

return (
  <>
    {content}
  </>
);
};

export default Cart;
