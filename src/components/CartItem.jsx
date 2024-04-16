import { MdDelete } from "react-icons/md";

export default function CartItem({
  product,
  onClickDelete,
  quantity,
  onClickAdd,
}) {
  return (
    <div className="flex flex-row justify-between w-11/12 p-3 my-3 rounded hover:cursor-pointer bg-slate-300 mx-auto">
      <a className="max-h-20 max-w-36 flex w-2/4 items-center">
        <img
          src={product.images[0]}
          className="object-contain object-center h-full rounded"
        />

        <h1 className="text-gray-900 text-lg font-medium px-2">
          {product.title}
        </h1>
      </a>
      <div className="flex justify-evenly items-center px-3">
        <p className="font-bold text-xl px-3 text-black">
          ${product.price * quantity}
        </p>
        <div className="flex flex-row bg-slate-400 p-3 w-full justify-evenly">
          <button
            className="transition ease-in duration-200 hover:text-red-500 cursor-pointer"
            onClick={onClickDelete}
          >
            <MdDelete />
          </button>
          <p>{quantity}</p>
          <button
            className="transition ease-in duration-200 hover:text-red-500 cursor-pointer font-bold"
            onClick={onClickAdd}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
