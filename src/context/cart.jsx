import { createContext, useEffect, useState } from "react";

// Sepet işlemlerini ve sepetteki ürünleri diğer bileşenlerle paylaşmak için createContext kullanıyoruz.
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Sepetteki ürünleri yönetmek için useState kullanıyoruz. Eğer localStorage'da 'cartItems' adında bir öğe varsa, bu öğeyi kullanarak başlangıç değerini ayarlıyoruz.
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  );

  // Sepete ürün ekleyen fonksiyon.
  const addToCart = (item) => {
    // Ürün zaten sepette var mı diye kontrol ediyoruz.
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    // Eğer ürün sepette varsa, ürünün adedini 1 artırıyoruz.
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      // Eğer ürün sepette yoksa, ürünü sepete ekliyoruz ve adedini 1 olarak ayarlıyoruz.
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Sepetten ürün silen fonksiyon.
  const deleteFromCart = (item) => {
    // Ürünün sepetteki durumunu kontrol ediyoruz.
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    // Eğer ürünün adedi 1 ise, ürünü sepette tamamen kaldırıyoruz.
    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      // Eğer ürünün adedi 1'den fazla ise, adedini 1 azaltıyoruz.
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
      );
    }
  };

  // Sepetin toplam fiyatını hesaplayan fonksiyon.
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  // Sepetteki tüm ürünleri silen fonksiyon.
  const clearCart = () => {
    setCartItems([]); // Sepet öğelerini boş bir dizi ile sıfırlıyoruz.
  };

  // cartItems değişkeninde herhangi bir değişiklik olduğunda, bu değişikliği localStorage'a kaydediyoruz.
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Bileşen yüklendiğinde, localStorage'dan 'cartItems' öğesini alıyoruz ve bu öğeyi cartItems state'ine atıyoruz.
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  // Context sağlayıcısı olarak CartContext.Provider'ı kullanıyoruz ve değer olarak sepet işlemlerini ve verilerini sağlıyoruz.
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, deleteFromCart, getCartTotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
