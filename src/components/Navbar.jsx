import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-16 py-3 items-center sticky top-0 bg-white w-full z-10">
      <div>
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
            <svg
              width="30px"
              height="30px"
              viewBox="-4.56 -4.56 33.12 33.12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0)"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
                transform="translate(0,0), scale(1)"
              >
                <rect
                  x="-4.56"
                  y="-4.56"
                  width="33.12"
                  height="33.12"
                  rx="16.56"
                  fill="#6366F1"
                  strokeWidth="0"
                ></rect>
              </g>
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                  stroke="#000000"
                  strokeWidth="0.00024000000000000003"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
