import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CartItem({
  product,
  onClickDelete,
  quantity,
  onClickAdd,
}) {
  return (
    <div className="mx-auto my-3 flex w-11/12 flex-row justify-between rounded bg-slate-300 p-3 hover:cursor-pointer">
      <Link
        to={`/products/${product.id}`}
        className="flex max-h-20 w-2/4 max-w-36 items-center"
      >
        <img
          src={product.images[0]}
          className="h-full rounded object-contain object-center"
        />

        <h1 className="px-2 text-lg font-medium text-gray-900">
          {product.title}
        </h1>
      </Link>
      <div className="flex items-center justify-evenly px-3">
        <p className="px-3 text-xl font-bold text-black">
          ${product.price * quantity}
        </p>
        <div className="flex w-full flex-row justify-evenly bg-slate-400 p-3">
          <button
            className="cursor-pointer transition duration-200 ease-in hover:text-red-500"
            onClick={onClickDelete}
          >
            <MdDelete />
          </button>
          <p>{quantity}</p>
          <button
            className="cursor-pointer font-bold transition duration-200 ease-in hover:text-red-500"
            onClick={onClickAdd}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
