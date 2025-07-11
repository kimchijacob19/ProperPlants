import { useState } from "react";
import PlantList from "./components/PlantList.jsx";
import Cart from "./components/Cart.jsx";
import PLANTS from "./data.js";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  }

  function incrementQuantity(plantID) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === plantID ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(plantID) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === plantID ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Proper Plants</h1>
      <PlantList plants={PLANTS} addToCart={addToCart} />
      <Cart
        cartItems={cart}
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
      />
    </div>
  );
}
