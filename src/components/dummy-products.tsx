"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import useCart from "../hooks/useCart";

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  quantity: number;
}

type Product = IProduct;

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic mouse with USB receiver and adjustable DPI",
    quantity: 10,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "Backlit mechanical keyboard with blue switches",
    quantity: 5,
  },
  {
    id: 3,
    name: "HD Webcam",
    description: "1080p webcam with built-in microphone and autofocus",
    quantity: 8,
  },
  {
    id: 4,
    name: "USB-C Charger",
    description: "Fast 65W USB-C wall charger with multiple ports",
    quantity: 12,
  },
  {
    id: 5,
    name: "Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones with 30hr battery life",
    quantity: 7,
  },
  {
    id: 6,
    name: "Laptop Stand",
    description: "Adjustable aluminum stand for laptops and tablets",
    quantity: 9,
  },
  {
    id: 7,
    name: "External SSD",
    description: "Portable 1TB SSD with high-speed USB 3.2 interface",
    quantity: 4,
  },
  {
    id: 8,
    name: "Smart LED Bulb",
    description: "Wi-Fi enabled color bulb compatible with Alexa and Google",
    quantity: 20,
  },
  {
    id: 9,
    name: "Gaming Chair",
    description: "Ergonomic chair with lumbar support and recline feature",
    quantity: 3,
  },
  {
    id: 10,
    name: "Fitness Tracker",
    description: "Waterproof smartwatch with heart rate and sleep tracking",
    quantity: 15,
  },
];

const DummyProducts = () => {
  const { state, dispatch } = useCart();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "start",
        alignItems: "start",
        gap: 2,
      }}
    >
      <h1>Products:</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {products &&
          products.map((product, index) => (
            <div
              key={index}
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Name:
                  </span>{" "}
                  {product.name}
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Quantity:{" "}
                  </span>
                  {product.quantity}
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Description:
                </span>{" "}
                {product.description}
              </div>
              <div
                style={{
                  marginTop: "1em",
                  display: "flex",
                }}
              >
                {/* add and increment of a product */}
                <button
                  style={{
                    backgroundColor: "transparent",
                    padding: 0,
                    margin: 0,
                    outline: "none",
                    border: "none",
                  }}
                  onClick={() => {
                    const existingItem = state.find(
                      (item) => item.pid === product.id
                    );

                    if (existingItem) {
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: {
                          pid: product.id,
                          quantity: existingItem.quantity + 1,
                        },
                      });
                    } else {
                      dispatch({
                        type: "ADD_ITEM",
                        payload: {
                          pid: product.id,
                          name: product.name,
                          quantity: 1,
                        },
                      });
                    }
                  }}
                >
                  <PlusIcon />
                </button>

                {/* decrement of a product */}
                {state.some(
                  (item) => item.pid == product.id && item.quantity > 1
                ) && (
                  <button
                    style={{
                      backgroundColor: "transparent",
                      padding: 0,
                      margin: 0,
                      outline: "none",
                      border: "none",
                    }}
                    onClick={() => {
                      const existingItem = state.find(
                        (item) => item.pid === product.id
                      );

                      if (existingItem) {
                        if (existingItem.quantity > 1) {
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: {
                              pid: product.id,
                              quantity: existingItem?.quantity - 1,
                            },
                          });
                        } else {
                          dispatch({
                            type: "REMOVE_ITEM",
                            payload: {
                              pid: product.id,
                            },
                          });
                        }
                      }
                    }}
                  >
                    <MinusIcon />
                  </button>
                )}

                {state.some(
                  (item) => item.pid == product.id && item.quantity == 1
                ) && (
                  <button
                    style={{
                      backgroundColor: "transparent",
                      padding: 0,
                      margin: 0,
                      outline: "none",
                      border: "none",
                    }}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: {
                          pid: product.id,
                        },
                      })
                    }
                  >
                    <MinusIcon />
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DummyProducts;
