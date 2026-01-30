import { useState } from "react";
import PLANTS from "./data";

import PlantsGrid from "./components/Plants/PlantsGrid";
import Cart from "./components/Cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === plant.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...plant, quantity: 1 }];
    });
  }

  function increment(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrement(id) {
    setCart((prevCart) => {
      const updated = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );

      return it
      return updated.filter((item) => item.quantity > 0);
    });
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Proper Plants</h1>
          <p className="subtext">A thriving local nursery 🌿</p>
        </div>

        <div className="cart-summary">
          Cart: <strong>{totalItems}</strong> item{totalItems === 1 ? "" : "s"}
        </div>
      </header>

      <div className="layout">
        <main className="panel">
          <h2 className="panel-title">Shop plants</h2>
          <PlantsGrid plants={PLANTS} cart={cart} onAdd={addToCart} />
        </main>

        <aside className="panel">
          <h2 className="panel-title">Cart</h2>
          <Cart cart={cart} onInc={increment} onDec={decrement} />
        </aside>
      </div>
    </div>
  );
}
