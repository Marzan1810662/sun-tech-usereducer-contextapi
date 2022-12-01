import { RouterProvider } from "react-router-dom";
import ProductProvder from "./context/ProductProvder";
import routes from "./routes/routes";


function App() {

 return (
    <div>
      <ProductProvder>
      <RouterProvider router={routes} />
      </ProductProvder>
    </div>
  );
}

export default App;
