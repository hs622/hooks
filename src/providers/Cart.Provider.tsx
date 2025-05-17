import { useReducer } from "react";
import cartReducer from "../reducers/Cart.Reducer";
import CartContext from "../context/Cart.Context";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};