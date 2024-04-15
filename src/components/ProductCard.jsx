export default function ProductCard({
  product: { images, category, title, price },
  onClick,
}) {
  return (
    <div
      className="w-full border-2 p-3 m-3 hover:cursor-pointer 
      hover:border-slate-100 md:w-1/4 rounded
    lg:w-1/6"
    >
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          src={images[0]}
          className="object-contain object-center w-full h-full"
          alt=""
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest mb-1 uppercase">
          {category}
        </h3>
        <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-2">
          {title}
        </h1>
        <div className="flex md:flex-row justify-between items-center">
          <p className="font-bold text-xl text-black">${price}</p>
          <button
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2"
            onClick={onClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
