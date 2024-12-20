import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; 

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate(); 

  const handlePlaceOrder = () => {
    clearCart();
    alert('Order Placed Successfully!');
    setTimeout(() => {
      navigate('/home'); 
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <div className="navbar-spacer"></div>
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add items to your cart to proceed.</p>
      ) : (
        <div>
          <div className="checkout-summary">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} className="checkout-item-img" />
                <div className="checkout-item-details">
                  <h3>{item.name}</h3>
                  <p>
                    ${(item.price * item.quantity).toFixed(2)} (${item.price.toFixed(2)} x {item.quantity})
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <h3>Total: ${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)}</h3>
          </div>

          <button onClick={handlePlaceOrder} className="submit-order-btn">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
