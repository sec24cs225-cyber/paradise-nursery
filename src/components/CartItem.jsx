import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem({ onShop }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const changeQuantity = (id, quantity) => {
    if (quantity < 1) {
      dispatch(removeItem(id));
      return;
    }

    dispatch(updateQuantity({ id, quantity }));
  };

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty">
          <h1>Your Shopping Cart</h1>
          <p>Your cart is currently empty.</p>
          <button className="primary-btn" onClick={onShop}>
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <article className="cart-row" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price} each</p>
          </div>

          <div className="quantity">
            <button
              onClick={() => changeQuantity(item.id, item.quantity - 1)}
            >
              −
            </button>
            <strong>{item.quantity}</strong>
            <button
              onClick={() => changeQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>

          <strong>₹{item.price * item.quantity}</strong>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
        </article>
      ))}

      <div className="cart-summary">
        <h2>Cart Total: ₹{total}</h2>
        <button className="checkout-btn" onClick={() => alert("Order checkout is ready!")}>
          Checkout
        </button>
      </div>
    </main>
  );
}

export default CartItem;
