import { Link } from "react-router-dom";
import { FaShoppingCart, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/cart";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // CartContext'den sepette yer alan ürünleri alıyoruz
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="sticky top-0 z-10 flex w-screen items-center justify-between  bg-white px-3 py-3 sm:px-16">
      <Link to={"/"}>
        <img
          src="https://i.imgur.com/Gg1BumM.png"
          className="h-11 w-11 object-fill"
        />
      </Link>
      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen === false ? <FaBars /> : <FaTimes />}
      </button>
      <ul
        className={` ${isOpen === false ? "hidden" : "flex"} absolute right-0 top-[4.2rem] h-auto flex-col items-center bg-white shadow sm:static sm:flex sm:h-auto sm:w-auto sm:flex-row sm:p-0 sm:shadow-none`}
      >
        <li className="dropdown group relative cursor-pointer px-5 ">
          <span className="inline-flex items-center">
            <FaAngleDown />
            Kategoriler
          </span>
          <div className="dropdown-menu absolute hidden h-auto group-hover:block">
            <ul className="w-48 bg-white px-6 py-8 shadow">
              <li className="py-1">
                <Link
                  to={"/smartphones"}
                  className="block cursor-pointer text-base font-bold uppercase hover:text-[#1d2c38]"
                >
                  SmartPhones
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={"/laptops"}
                  className="block cursor-pointer text-base font-bold uppercase hover:text-[#1d2c38]"
                >
                  Laptops
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={"/groceries"}
                  className="block cursor-pointer text-base font-bold uppercase hover:text-[#1d2c38]"
                >
                  Groceries
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={"/womens-dresses"}
                  className="block cursor-pointer text-base font-bold uppercase hover:text-[#1d2c38]"
                >
                  Womens Dresses
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={"/tops"}
                  className="block cursor-pointer text-base font-bold uppercase hover:text-[#1d2c38]"
                >
                  Tops
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="px-5">
          <Link to={"/"}>Ana Sayfa</Link>
        </li>
        <li className="px-5">
          <Link to={"/products"}>Ürünlerimiz</Link>
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
