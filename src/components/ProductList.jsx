import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { products } from "../data/products";

function ProductList({ onCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(products.map((product) => product.category))];

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <main className="page">
      <div className="page-title">
        <h1>Our Plants</h1>
        <p>Choose beautiful plants for your home and garden.</p>
        <button className="primary-btn" onClick={onCart}>
          View Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>

      {categories.map((category) => (
        <section className="category" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <article className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />

                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="description">{product.description}</p>
                    <p className="price">₹{product.price}</p>

                    <button
                      className="add-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
