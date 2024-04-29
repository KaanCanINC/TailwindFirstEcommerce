import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/cart";
import { useContext } from "react";

export async function loader({ params: { category } }) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );
  const productData = await res.json();
  return { productData };
}

export const ProductsByCategory = () => {
  const { addToCart, deleteFromCart, cartItems } = useContext(CartContext);
  const { productData } = useLoaderData();

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-11">
        <div className="-m-4 flex flex-wrap justify-center">
          {productData.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => addToCart(product)}
              quantity={cartItems}
              onClickDelete={() => deleteFromCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
