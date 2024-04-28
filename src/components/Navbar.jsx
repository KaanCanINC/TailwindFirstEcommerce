import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function Navbar() {
  {
    /*CartContext'den sepette yer alan ürünleri alıyoruz*/
  }
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="flex justify-between px-16 py-3 items-center sticky top-0 bg-white w-full z-10">
      <Link to={"/"}>
        <img
          src="https://i.imgur.com/Gg1BumM.png"
          className="h-11 w-11 object-fill"
        />
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
            {/*Sepette yer alan ürünlerin sayısını yazdırır (ürün adetleri dahil değil)*/}
            {cartItems.length}
            <FaShoppingCart className="size-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
