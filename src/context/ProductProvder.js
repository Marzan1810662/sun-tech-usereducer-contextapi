import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { productReducer } from '../state/ProductState/productReducer';

export const PRODUCT_CONTEXT = createContext();

const ProductProvder = ({children}) => {
    const initialState = {
        products: [],
        cart: [],
        wishlist:[],
        loading: false,
        error: false
    }

    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => dispatch({ type: "FETCHING SUCCESS", payload: data }))
    }, []);

    // console.log(state);
    const value = {
        state,
        dispatch
    }

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProductContext = () =>{
    const context = useContext(PRODUCT_CONTEXT);

    // console.log(context)

    return context;
}

export default ProductProvder;