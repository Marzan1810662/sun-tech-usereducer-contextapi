import { createContext, useEffect, useReducer} from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

export const PRODUCT_CONTEXT = createContext();
function App() {
  const initialState = {
    products: [],
    cart: [],
    loading: false,
    error:false
  }
  const productReducer = (state, action) =>{
    switch (action.type){
      case "FETCHING SUCCESS":
        return {
          ...state,
          products: action.payload,
        }
    }

  }
  const [state,dispatch] = useReducer(productReducer, initialState)

  useEffect(() => {
    fetch("products.json")
    .then(res => res.json())
    .then(data => dispatch({type:"FETCHING SUCCESS", payload:data}))
  }, [])

  // console.log(state)

  const value = {
    state,
    dispatch
  }

  return (
    <div>
      <PRODUCT_CONTEXT.Provider value={value}>
      <RouterProvider router={routes} />
      </PRODUCT_CONTEXT.Provider>
    </div>
  );
}

export default App;
