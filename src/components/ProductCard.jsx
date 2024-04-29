import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ProductCard({
  product: { images, category, title, price, id },
  onClick,
  onClickDelete,
  quantity,
}) {
  return (
    <div
      className="m-3 w-full rounded border-2 p-3 
      hover:cursor-pointer hover:border-slate-100 md:w-1/4
    lg:w-1/6"
    >
      {/*Tıklanan ürünün detay sayfasına yönlendirir*/}
      <Link to={`${id}`}>
        <a className="relative block h-48 overflow-hidden rounded">
          <img
            src={images[0]}
            className="h-full w-full object-contain object-center"
            alt=""
          />
        </a>
      </Link>
      <div className="mt-4">
        <Link
          to={`/${category}`}
          className="mb-1 text-xs uppercase tracking-widest  text-sky-900 hover:text-blue-500"
        >
          {category}
        </Link>
        <h1 className="title-font line-clamp-2 text-lg font-medium text-gray-900">
          {title}
        </h1>
        <div className="flex items-center justify-between md:flex-row">
          {/*Ürünün sepette olup olmadığını kontrol edip eğer ürün sepette ise ürünün adetini sepete ekle butonu yerine gösteriyor*/}
          <p className="text-xl font-bold text-black">${price}</p>
          {!quantity.find((item) => item.id === id) ? (
            <button
              className="me-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
              onClick={onClick}
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-1 flex-row items-center justify-between border border-gray-300 px-5 py-3">
              {/*Ürün sepette ise ürün adedini eksilt*/}
              <button
                className="cursor-pointer font-bold transition duration-200 ease-in hover:text-red-500"
                onClick={onClickDelete}
              >
                -
              </button>
              {/*Ürün sepette ise kaç adet eklendiğini yazdır*/}
              <p>{quantity.map((item) => item.id === id && item.quantity)}</p>
              {/*Ürün sepette ise ürün adedini arttır*/}
              <button
                className="cursor-pointer font-bold transition duration-200 ease-in hover:text-red-500"
                onClick={onClick}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
