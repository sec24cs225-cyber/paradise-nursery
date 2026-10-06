import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      {page === "home" && (
        <main className="landing-page">
          <div className="overlay">
            <div className="landing-content">
              <p className="eyebrow">WELCOME TO</p>
              <h1>Paradise Nursery</h1>
              <p className="landing-text">
                Bring a little more green into your life with beautiful,
                healthy plants for every space.
              </p>
              <button className="primary-btn" onClick={() => setPage("shop")}>
                Get Started
              </button>
            </div>
          </div>
        </main>
      )}

      {page !== "home" && (
        <>
          <header className="navbar">
            <button className="brand" onClick={() => setPage("home")}>
              🌿 Paradise Nursery
            </button>
            <nav>
              <button onClick={() => setPage("shop")}>Plants</button>
              <button onClick={() => setPage("about")}>About Us</button>
              <button onClick={() => setPage("cart")}>🛒 Cart</button>
            </nav>
          </header>

          {page === "shop" && <ProductList onCart={() => setPage("cart")} />}
          {page === "cart" && <CartItem onShop={() => setPage("shop")} />}
          {page === "about" && <AboutUs />}
        </>
      )}
    </div>
  );
}

export default App;
