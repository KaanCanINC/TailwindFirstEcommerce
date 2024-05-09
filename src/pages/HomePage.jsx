import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {
  //Önerilen ürünlerin her seferinde değiştirilmesiiçin state tanımlıyoruz
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //API'dan verileri alıyoruz
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();

      //API'dan aldığımız verilerin indeks değerlerini içeren bir dizi oluşturuyoruz
      const allProductIndices = [...Array(data.products.length)].map(
        (_, i) => i,
      );

      //randomIndices adlı boş bir array oluşturup içerisine rastgele 5 adet birbirinden farklı ürünün indesk değerlerini atayacağız
      const randomIndices = [];
      {
        //while loop ile arrayi döngüye alıyoruz
      }
      while (randomIndices.length < 5) {
        {
          //Verilerin indekslerinin yer aldığı arrayin uzunluğu kadar rastgele bir sayı oluşturuyoruz
        }
        const randomIndex = Math.floor(
          Math.random() * allProductIndices.length,
        );
        //Ürünlerin indekslerini atayacağımız arrayin içerisinde aynı indeskin yer alıp almadığını kontrol ediyoruz eğer indesk değeri array içerisinde yer almıyorsa indeks değerini arraye push metodu kullanarak atıyoruz
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }

      //randomIndices içindeki indeks değerlerine denk gelen ürünleri map metodu ile randomProducts değişkenine yeni bir array olarak yazdırıyoruz
      const randomProducts = randomIndices.map((index) => data.products[index]);
      setProducts(randomProducts);
    };

    //useEffect içerisinde fetchProducts fonksiyonunu çağırıyoruz
    fetchProducts();
  }, []); // Fonksiyonun sayfa yüklendiğinde bir kez çalıştırılması için arrayi boş bırakıyoruz
  return (
    <div className="container m-auto flex h-screen flex-col items-center text-gray-600">
      <div className="flex flex-col items-center">
        <img
          className="mb-10 w-5/6 rounded md:w-3/6 lg:w-2/6"
          alt="hero"
          src="https://images.unsplash.com/photo-1601132359864-c974e79890ac?q=80&w=720"
        />
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>

          {/*Alışveriş sayfasına yönlendir*/}
          <Link to={"/products"}>
            <button className="rounded bg-[#344A5C] px-6 py-2 text-lg text-white hover:bg-[#1d2c38] focus:outline-none">
              Alisverise Basla
            </button>
          </Link>
        </div>
      </div>
      <h1>Önerilen Ürünler</h1>
      <div className="flex-rol flex  w-full items-center justify-center overflow-y-visible overflow-x-scroll sm:overflow-hidden">
        {/*useState kullanarak atadığımız rastgele ürünlerin değerlerini map metodu ile html etiketlerinde kullanıyoruz*/}
        {products.map((product, index) => (
          <div
            key={index}
            className="m-3 rounded border-2 p-3 
      hover:cursor-pointer hover:border-slate-100 "
          >
            {/*Tıklanan ürünün detay sayfasına yönlendirir*/}
            <Link to={`/products/${product.id}`}>
              <img
                src={product.images[0]}
                className="relative block h-48 w-full overflow-hidden rounded object-contain object-center"
                alt=""
              />
            </Link>
            <div className="mt-4">
              <Link
                to={`/${product.category}`}
                className="mb-1 text-xs uppercase tracking-widest  text-sky-900 hover:text-blue-500"
              >
                {product.category}
              </Link>
              <h1 className="title-font line-clamp-2 text-lg font-medium text-gray-900">
                {product.title}
              </h1>
              <div className="flex items-center justify-between md:flex-row">
                <p className="text-xl font-bold text-black">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
