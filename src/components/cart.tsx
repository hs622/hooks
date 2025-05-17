"use client";

import { ShoppingCart } from "lucide-react";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { state } = useCart();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        alignItems: "start",
      }}
    >
      <div>Hallo!</div>
      <div
        style={{
          display: "flex",
        }}
      >
        <ShoppingCart />
        {state ? (
          <div
            style={{
              backgroundColor: "#fff",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              color: "#242424",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {state.length}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
