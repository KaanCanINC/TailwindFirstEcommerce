import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/cart";
import { useContext } from "react";
import { Link } from "react-router-dom";

export async function loader({ params: { id } }) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const productData = await res.json();
  return { productData };
}

export const ProductDetailPage = () => {
  const { addToCart, deleteFromCart, cartItems } = useContext(CartContext);
  const { productData } = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap md:flex-row">
        <div className="mb-4 w-full md:mb-0 md:w-1/2">
          <div className="inline-flex flex-row overflow-scroll sm:relative sm:block sm:overflow-visible">
            {productData.images.map((item) => (
              <img
                key={item}
                src={item}
                alt={productData.title}
                className="h-auto w-full rounded-lg object-cover shadow-md"
              />
            ))}
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <h1 className="mb-4 text-2xl font-semibold">{productData.title}</h1>
          <p className="mb-4 text-gray-700">{productData.description}</p>
          <div className="mb-4 flex items-center">
            <span className="mr-2 text-gray-700">Category:</span>
            <Link
              to={`/${productData.category}`}
              className="uppercase text-blue-500"
            >
              {productData.category}
            </Link>
          </div>
          <div className="mb-4 flex items-center">
            <span className="mr-2 text-gray-700">Price:</span>
            <span className="font-semibold text-red-500">
              ${productData.price}
            </span>
          </div>
          <div className="mb-4 flex items-center">
            <span className="mr-2 text-gray-700">Rating:</span>
            <span className="text-yellow-400">
              ★★★★★ ({productData.rating})
            </span>
          </div>
          <div className="flex space-x-2">
            {!cartItems.find((item) => item.id === productData.id) ? (
              <button
                className="me-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
                onClick={() => addToCart(productData)}
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex flex-1 flex-row items-center justify-between border border-gray-300 px-5 py-3">
                <button
                  className="cursor-pointer font-bold transition duration-200 ease-in hover:text-red-500"
                  onClick={() => deleteFromCart(productData)}
                >
                  -
                </button>
                <p>
                  {cartItems.map(
                    (item) => item.id === productData.id && item.quantity,
                  )}
                </p>
                <button
                  className="cursor-pointer font-bold transition duration-200 ease-in hover:text-red-500"
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
