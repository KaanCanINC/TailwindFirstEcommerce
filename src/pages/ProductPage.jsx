import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/cart";
import { useContext } from "react";

{
  /*loader ile API'dan veriyi çekiyoruz*/
}
export async function loader() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const productData = await res.json();
  return { productData };
}

function ProductPage() {
  {
    /*useLoaderData ile loader içerisinde API'dan alıdımız veriyi bir değişkene atıyoruz*/
  }
  const { productData } = useLoaderData();

  {
    /*CartContext içerisindeki fonksiyonları useContext hooku ile sayfamıza çekiyoruz*/
  }
  const { cartItems, deleteFromCart, addToCart } = useContext(CartContext);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-11 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
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
