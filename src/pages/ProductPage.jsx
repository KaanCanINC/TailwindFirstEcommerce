import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  const productData = await res.json();

  return { productData };
}

function ProductPage() {
  const { productData } = useLoaderData();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
