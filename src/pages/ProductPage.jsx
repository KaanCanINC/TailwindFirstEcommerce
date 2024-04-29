import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/cart";
import { useContext } from "react";

//loader ile API'dan veriyi çekiyoruz

export async function loader() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const productData = await res.json();
  return { productData };
}

function ProductPage() {
  //useLoaderData ile loader içerisinde API'dan alıdımız veriyi bir değişkene atıyoruz

  const { productData } = useLoaderData();

  //CartContext içerisindeki fonksiyonları useContext hooku ile sayfamıza çekiyoruz

  const { cartItems, deleteFromCart, addToCart } = useContext(CartContext);
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-11">
        <div className="-m-4 flex flex-wrap justify-center">
          {/*API'dan aldığımız veriyi ProductCard Componentimize mapliyoruz*/}
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
}

export default ProductPage;
