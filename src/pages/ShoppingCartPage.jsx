import { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/cart";

export default function ShoppingCartPage() {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col relative left-60">
      <h1 className="text-4xl mb-4">Sepetim</h1>
      <div className="w-4/6 h-1/2 rounded-lg">
        {cartItems?.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
