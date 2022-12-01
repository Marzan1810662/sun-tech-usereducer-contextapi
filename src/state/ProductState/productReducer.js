import { actionTypes } from "./actionTypes"

export     const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                products: action.payload,
            }
            case actionTypes.ADD_TO_CART:
                return{
                    ...state,
                    cart: [...state.cart,action.payload]
                }
            case actionTypes.ADD_TO_WISHLIST:
                return{
                    ...state,
                    wishlist: [...state.wishlist,action.payload]
                }
        default:
            return state
    }

}