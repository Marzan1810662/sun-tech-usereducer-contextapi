import React from "react";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/ProductProvder";

const Wishlist = () => {
    const { state: { wishlist, loading, error } } = useProductContext();

    let content;
    if (loading) {
        content = <p>Loading...</p>
    }
    if (error) {
        content = <p>Something went wrong...</p>
    }
    if (!loading && !error && wishlist.length == 0) {
        content = <p>Nothing to show</p>
    }
    if (!loading && !error && wishlist.length) {
        content = <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {wishlist.map((product, index) => <ProductCard key={index} product={product} />)}
        </div>
    }

    return (
        <>
            {content}
        </>
    );

};

export default Wishlist;