import type { CartAction, CartState } from "../types/cart";

export default function cartReducer(
  state: CartState,
  action: CartAction
): CartState {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.pid != action.payload.pid);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.pid === action.payload.pid
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
