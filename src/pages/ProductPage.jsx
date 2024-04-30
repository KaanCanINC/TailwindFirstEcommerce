import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/cart";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

//loader ile API'dan veriyi çekiyoruz

export async function loader() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const productData = await res.json();
  return { productData };
}

function ProductPage() {
  //Ürünleri hangi özelliklere göre sıralayacağımızı useState yönetiyoruz select etiketi her değiştirildiğinde seçilen değer bu sorter stateine atanıyor
  const [sorter, setSorter] = useState();
  //Seçilen sıralama türüne göre ürünleri sıralamak için useState kullanıyoruz
  const [sortedProducts, setSortedProducts] = useState([]);

  //useLoaderData ile loader içerisinde API'dan alıdımız veriyi bir değişkene atıyoruz
  const { productData } = useLoaderData();
  //CartContext içerisindeki fonksiyonları useContext hooku ile sayfamıza çekiyoruz
  const { cartItems, deleteFromCart, addToCart } = useContext(CartContext);

  //Sorter statei her değiştiğinde sortProduct() fonksiyonu çalışıyor
  useEffect(() => {
    sortProducts();
  }, [sorter]);

  const sortProducts = () => {
    //Ürünlerin olduğu ana dizide değişiklik yapmamak için yeni bir arraye tanımlıyoruz
    const sorted = [...productData.products];
    //Sıralama işlemleri
    if (sorter === "priceLowest") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sorter === "priceHighest") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sorter === "ratingMost") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sorter === "byCategory") {
      sorted.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sorter === "discountPercentage") {
      sorted.sort((a, b) => b.discountPercentage - a.discountPercentage);
    }
    //Sıralanan ürün arrayini sortedProducts stateine atıyoruz
    setSortedProducts(sorted);
  };

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-11">
        <select
          name="sortProduct"
          id="productSorter"
          onChange={(e) => setSorter(e.target.value)} //select etiketinde seçilen option value sorter stateine atanıyor
        >
          <option value="bestMatch">Best match</option>
          <option value="priceHighest">Price: Highest first</option>
          <option value="priceLowest">Price: Lowest first</option>
          <option value="ratingMost">Most rated</option>
          <option value="byCategory">By category</option>
          <option value="discountPercentage">Discount percentage</option>
        </select>
        <div className="-m-4 flex flex-wrap justify-center">
          {/*API'dan aldığımız veriyi ProductCard Componentimize mapliyoruz*/}
          {sortedProducts.map((product) => (
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
