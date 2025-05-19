import Cart from "./components/cart";
import DummyProducts from "./components/dummy-products";

function App() {

  return (
    <div
      style={{
        padding: "5em",
      }}
    >
      <Cart />
      <DummyProducts />
    </div>
  );
}

export default App;
