import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/cart";
import { useContext } from "react";

export async function loader({ params: { id } }) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const productData = await res.json();
  return { productData };
}

export const ProductDetailPage = () => {
  const { addToCart, deleteFromCart, cartItems } = useContext(CartContext);
  const {
    productData: { images, category, title, price, description, rating, id },
    productData,
  } = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap md:flex-row">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div className="product-image-carousel relative">
            {images.map((item) => (
              <img
                key={item}
                src={item}
                alt={title}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-2xl font-semibold mb-4">{title}</h1>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Category:</span>
            <span className="text-blue-500">{category}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Price:</span>
            <span className="text-red-500 font-semibold">${price}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Rating:</span>
            <span className="text-yellow-400">★★★★★ ({rating})</span>
          </div>
          <div className="flex space-x-2">
            {!cartItems.find((item) => item.id === id) ? (
              <button
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2"
                onClick={() => addToCart(productData)}
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex flex-row border-gray-300 border py-3 px-5 justify-between flex-1 items-center">
                <button
                  className="transition ease-in duration-200 hover:text-red-500 cursor-pointer font-bold"
                  onClick={() => deleteFromCart(productData)}
                >
                  -
                </button>
                <p>
                  {cartItems.map((item) => item.id === id && item.quantity)}
                </p>
                <button
                  className="transition ease-in duration-200 hover:text-red-500 cursor-pointer font-bold"
                  onClick={() => addToCart(productData)}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
