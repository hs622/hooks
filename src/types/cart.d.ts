import type React from "react";

export type CartItem = {
  pid: number;
  quantity: number;
};

export type CartState = CartItem[];

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { pid: number } }
  | { type: "UPDATE_QUANTITY"; payload: { pid: number; quantity: number } }
  | { type: "CLEAR_CART" };

export type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};