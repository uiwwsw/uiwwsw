import { StoreService } from "@/application/ports";
import React, { ReactNode, useState } from "react";
import { useContext } from "react";
import { cookies } from "./fakeData";

const StoreContext = React.createContext<StoreService>({ portfolio: [] });
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    portfolio: [],
    user,
    cart,
    cookies,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
