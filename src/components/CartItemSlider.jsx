import { MdDelete } from "react-icons/md";

export default function CartItemSlider({ product, onClick }) {
  return (
    <div className="hidden sm:w-1/4 p-3 mx-1 my-3 rounded hover:cursor-pointer bg-slate-300 sm:flex flex-row justify-between">
      <a className="h-20 flex w-2/4 items-center">
        <img
          src={product.images[0]}
          className="object-contain object-center h-full rounded"
        />

        <h1 className="text-gray-900 title-font text-lg font-medium px-2">
          {product.title}
        </h1>
      </a>
      <div className="flex justify-evenly items-center px-3">
        <p className="font-bold text-xl px-3 text-black">${product.price}</p>
        <button
          className="transition ease-in duration-200 hover:text-red-500 font-light cursor-pointer"
          onClick={onClick}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
