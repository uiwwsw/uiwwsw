import React, { ReactNode, useContext, useState } from "react";
const StoreContext = React.createContext({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [portfolio, setPortfolio] = useState();

  const value = {
    portfolio,
    // setPortfolio,
    // updateCart: setCart,
    // updateOrders: setOrders,
    // emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
