import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-16 py-3 items-center sticky top-0 bg-white w-full z-10">
      <div>
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
      </div>
      <ul className="flex flex-row items-center">
        <li className="px-5">
          <Link to={"/"}>Ana Sayfa</Link>{" "}
        </li>
        <li className="px-5">
          <Link to={"/products"}>Urunlerimiz</Link>{" "}
        </li>
        <li>
          <Link to={"/cart"}>
            <FaShoppingCart className="size-5"/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
