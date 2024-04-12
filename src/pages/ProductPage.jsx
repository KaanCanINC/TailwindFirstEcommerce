import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/cart";
import { useContext } from "react";

export async function loader() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const productData = await res.json();
  return { productData };
}

function ProductPage() {
  const { productData } = useLoaderData();
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {productData.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
