import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
                        <div className="navbar-spacer"></div>

      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>

          <Link to="/checkout" className="checkout-button">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
