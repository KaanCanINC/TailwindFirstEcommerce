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
      className="w-full border-2 p-3 m-3 hover:cursor-pointer 
      hover:border-slate-100 md:w-1/4 rounded
    lg:w-1/6"
    >
      {/*Tıklanan ürünün detay sayfasına yönlendirir*/}
      <Link to={`${id}`}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            src={images[0]}
            className="object-contain object-center w-full h-full"
            alt=""
          />
        </a>
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest mb-1 uppercase">
          {category}
        </h3>
        <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-2">
          {title}
        </h1>
        <div className="flex md:flex-row justify-between items-center">
          {/*Ürünün sepette olup olmadığını kontrol edip eğer ürün sepette ise ürünün adetini sepete ekle butonu yerine gösteriyor*/}
          <p className="font-bold text-xl text-black">${price}</p>
          {!quantity.find((item) => item.id === id) ? (
            <button
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2"
              onClick={onClick}
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-row border-gray-300 border py-3 px-5 justify-between flex-1 items-center">
              {/*Ürün sepette ise ürün adedini eksilt*/}
              <button
                className="transition ease-in duration-200 hover:text-red-500 cursor-pointer font-bold"
                onClick={onClickDelete}
              >
                -
              </button>
              {/*Ürün sepette ise kaç adet eklendiğini yazdır*/}
              <p>{quantity.map((item) => item.id === id && item.quantity)}</p>
              {/*Ürün sepette ise ürün adedini arttır*/}
              <button
                className="transition ease-in duration-200 hover:text-red-500 cursor-pointer font-bold"
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
