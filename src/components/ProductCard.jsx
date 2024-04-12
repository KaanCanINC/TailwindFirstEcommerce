export default function ProductCard({
  product: { images, category, title, price },
  onClick,
}) {
  return (
    <div
      className="w-full border-2 p-3 m-3 hover:cursor-pointer 
      hover:border-slate-100 md:w-1/2 
    lg:w-1/6"
    >
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          src={images[0]}
          className="object-contain object-center w-full h-full block"
          alt=""
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
          {category}
        </h3>
        <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-2">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-bold text-xl text-black">${price}</p>
          <button
            className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            onClick={onClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
