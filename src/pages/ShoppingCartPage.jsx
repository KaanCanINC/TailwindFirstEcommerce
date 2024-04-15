import { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/cart";

export default function ShoppingCartPage() {
  const { cartItems, deleteFromCart, getCartTotal } = useContext(CartContext);

  return (
    <div>
      <div className="flex flex-col sm:ml-60 sm:my-7 items-center sm:items-start">
        <h1 className="text-4xl mb-4">Sepetim</h1>
        <div className="sm:w-4/6 h-[75vh] overflow-y-auto rounded-lg">
          {cartItems?.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onClick={() => deleteFromCart(item)}
            />
          ))}
        </div>
      </div>{" "}
      <div className=" block sm:flex flex-col sm:absolute sm:top-44 sm:right-28 sm:w-2/12 w-full text-center ">
        <h1>
          Sepet toplamı: $ <span className="font-bold">{getCartTotal()}</span>
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-12 border border-blue-700 rounded">
          Alisverisi tamamla
        </button>
      </div>
    </div>
  );
}
