import React, { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [ShowCart, setShowCart] = useState(false);
  const [CartItems, setCartItems] = useState([]);
  const [TotalPrice, setTotalPrice] = useState();
  const [Totalquantities, setTotalquantities] = useState();
  const [qty, setqut] = useState(1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = CartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalprice) => prevTotalprice + product.price * quantity
    );
    setTotalquantities((prevtotalquantities) => prevtotalquantities + quantity);
    if (checkProductInCart) {
      const updatedCartItems = CartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: product.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...CartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };
  const incQty = () => {
    setqut((prevQut) => prevQut + 1);
  };
  const decQty = () => {
    setqut((prevQut) => {
      if (prevQut - 1 < 1) return 1;
      return prevQut - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        ShowCart,
        CartItems,
        TotalPrice,
        Totalquantities,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
