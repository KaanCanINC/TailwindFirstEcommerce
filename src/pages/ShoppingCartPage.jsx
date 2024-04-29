import { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/cart";
import { useState } from "react";

export default function ShoppingCartPage() {
  const { cartItems, deleteFromCart, getCartTotal, addToCart, clearCart } =
    useContext(CartContext);
  return (
    <div>
      <div className="flex flex-col items-center sm:my-7 sm:ml-60 sm:items-start">
        <h1 className="mb-4 text-4xl">Sepetim</h1>
        <div className="h-[75vh] overflow-y-auto rounded-lg sm:w-4/6">
          {cartItems?.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onClickDelete={() => deleteFromCart(item)}
              quantity={item.quantity}
              onClickAdd={() => addToCart(item)}
            />
          ))}
        </div>
      </div>{" "}
      <div className=" block w-full flex-col text-center sm:absolute sm:right-28 sm:top-44 sm:flex sm:w-2/12 ">
        <h1>
          Sepet toplamı: $ <span className="font-bold">{getCartTotal()}</span>
        </h1>
        <button className="mb-3 rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Alisverisi tamamla
        </button>
        <button
          className="rounded border border-red-700 bg-red-500 py-2 font-bold text-white hover:bg-rose-700"
          onClick={() => clearCart()}
        >
          Sepeti temizle
        </button>
      </div>
    </div>
  );
}
