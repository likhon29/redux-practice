import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      
        <RouterProvider router={routes} />
      
    </div>
  );
}

export default App;
