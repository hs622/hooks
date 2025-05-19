import { createContext } from "react";
import type { CartContextType } from "../types/cart";

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export default CartContext;
