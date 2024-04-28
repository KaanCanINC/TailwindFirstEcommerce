import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();

      const allProductIndices = [...Array(data.products.length)].map(
        (_, i) => i,
      );

      // Select 5 random indices without duplicates
      const randomIndices = [];
      while (randomIndices.length < 5) {
        const randomIndex = Math.floor(
          Math.random() * allProductIndices.length,
        );
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }

      // Select the corresponding random products
      const randomProducts = randomIndices.map((index) => data.products[index]);
      setProducts(randomProducts);
    };

    fetchProducts(); // Call the function within useEffect
  }, []); // Empty dependency array to fetch only once
  return (
    <section className="text-gray-600 container m-auto flex flex-col items-center h-[90vh]">
      <div className="flex flex-col items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 rounded"
          alt="hero"
          src="https://images.unsplash.com/photo-1601132359864-c974e79890ac?q=80&w=720"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>

          <Link to={"/products"}>
            <button className="text-white bg-[#344A5C] py-2 px-6 focus:outline-none hover:bg-[#1d2c38] rounded text-lg">
              Alisverise Basla
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <h1>Önerilen Ürünler</h1>
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full border-2 p-3 m-3 hover:cursor-pointer 
      hover:border-slate-100 md:w-1/4 rounded
    lg:w-1/6"
          >
            <Link to={`/products/${product.id}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  src={product.images[0]}
                  className="object-contain object-center w-full h-full"
                  alt=""
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest mb-1 uppercase">
                {product.category}
              </h3>
              <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-2">
                {product.title}
              </h1>
              <div className="flex md:flex-row justify-between items-center">
                <p className="font-bold text-xl text-black">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
