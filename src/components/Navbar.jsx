import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="flex justify-between px-16 py-3 items-center sticky top-0 bg-white w-full z-10">
      <Link to={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </Link>{" "}
      <ul className="flex flex-row items-center">
        <li className="px-5">
          <Link to={"/"}>Ana Sayfa</Link>{" "}
        </li>
        <li className="px-5">
          <Link to={"/products"}>Urunlerimiz</Link>{" "}
        </li>
        <li>
          <Link to={"/cart"} className="flex flex-row">
            {cartItems.length}
            <FaShoppingCart className="size-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
