"use client";

import { ShoppingCart, Trash2 } from "lucide-react";
import useCart from "../hooks/useCart";
import { useState } from "react";

const Cart = () => {
  const [model, openModel] = useState<boolean>(false);
  const { state, dispatch } = useCart();

  // Function to handle modal toggle
  const toggleModal = () => {
    if (!model) document.body.classList.add("overflow-y-hidden");
    else document.body.classList.remove("overflow-y-hidden");
    openModel(!model);
  };

  return (
    <div>
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
          <button
            onClick={toggleModal}
            style={{
              backgroundColor: "transparent",
              outline: "none",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              border: "none",
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
                }}
              >
                {state.length}
              </div>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>

      {/* Model background */}
      {model && (
        <div
          onClick={toggleModal}
          style={{
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
            backgroundColor: "rgba(225, 225, 225, .25)",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* model */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              height: "20rem",
              width: "35rem",
              borderRadius: 10,
              padding: 20,
              backgroundColor: "#242424",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* model body */}
            <div
              aria-label="model-header"
              style={{
                display: "flex",
                paddingBottom: 10,
                borderBottom: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "white",
              }}
            >
              <div style={{ flexGrow: 1 }}>Products</div>
              <div style={{ flexGrow: 1 }}>Quantity</div>
            </div>

            <div
              aria-label="model-body"
              style={{ height: "-webkit-fill-available" }}
            >
              {state.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    paddingBlock: 10,
                    borderBottom: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "white",
                  }}
                >
                  <div style={{ flexGrow: 1 }}>{item.name}</div>
                  <div style={{ flexGrow: 1 }}>{item.quantity}</div>
                </div>
              ))}
            </div>

            <div
              aria-label="model-footer"
              style={{
                display: "flex",
                justifyContent: "end",
                paddingBlock: 10,
              }}
            >
              <button
                onClick={() => {
                  dispatch({
                    type: "CLEAR_CART",
                  });

                  openModel(!model);
                }}
                style={{
                  padding: 0,
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
              >
                <Trash2 />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
