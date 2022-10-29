import React, { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [ShowCart, setShowCart] = useState(false);
  const [CartItems, setCartItems] = useState();
  const [TotalPrice, setTotalPrice] = useState();
  const [Totalquantities, setTotalquantities] = useState();
  const [qty, setqut] = useState(1);
  const incQty = () => {
    setqut((prevQut) => prevQut + 1);
  };
  const deccQty = () => {
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
        deccQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
