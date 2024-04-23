import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/Root.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import { loader as productLoader } from "./pages/ProductPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.jsx";
import { CartProvider } from "./context/cart.jsx";
import { ProductDetailPage } from "./pages/ProductDetailPage.jsx";
import { loader as detailPageLoader } from "./pages/ProductDetailPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: "/cart",
        element: <ShoppingCartPage />,
      },
      {
        path: `/products/:id`,
        element: <ProductDetailPage />,
        loader: detailPageLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>,
);
