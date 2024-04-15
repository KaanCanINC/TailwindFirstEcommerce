import { Link } from "react-router-dom";
import { useContext } from "react";
import CartItemSlider from "../components/CartItemSlider";
import { CartContext } from "../context/cart";

const HomePage = () => {
  const { cartItems, deleteFromCart } = useContext(CartContext);
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://images.unsplash.com/photo-1601132359864-c974e79890ac?q=80&w=720"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            <Link to={"/products"}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Alisverise Basla
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center w-full justify-center m-auto">
        {cartItems?.map((item) => (
          <CartItemSlider
            key={item.id}
            product={item}
            onClick={() => deleteFromCart(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
