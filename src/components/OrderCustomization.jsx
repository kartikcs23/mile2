import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const OrderCustomization = () => {
  const baseItem = {
    id: 1,
    name: 'Pizza',
    description: 'J',
    price: 10, // Base price for the item (for example)
  };

  const [size, setSize] = useState('Medium');
  const [ingredients, setIngredients] = useState([]);
  const [addons, setAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleIngredientChange = (ingredient) => {
    setIngredients((prev) =>
      prev.includes(ingredient) ? prev.filter((i) => i !== ingredient) : [...prev, ingredient]
    );
  };

  const handleAddonChange = (addon) => {
    setAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const handleQuantityChange = (operation) => {
    setQuantity((prev) => (operation === 'increment' ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const calculateTotalPrice = () => {
    let total = baseItem.price * quantity;

    // Add extra costs for customizations (example prices for ingredients and addons)
    if (size === 'Large') total += 2;
    if (size === 'Small') total -= 1;

    if (ingredients.length > 0) total += ingredients.length * 1.5; // Each ingredient adds $1.5
    if (addons.length > 0) total += addons.length * 2; // Each addon adds $2

    return total.toFixed(2);
  };

  const handleAddToCart = (addToCart) => {
    const customizedItem = {
      ...baseItem,
      size,
      ingredients,
      addons,
      quantity,
      totalPrice: calculateTotalPrice(),
    };

    addToCart(customizedItem);
  };

  return (
    <CartContext.Consumer>
      {({ addToCart }) => (
        <div className="order-customization-container">
          <h1>Customize Your Order</h1>

          <div className="customization-options">
            <div className="customization-option">
              <label>Size:</label>
              <select onChange={handleSizeChange} value={size}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>

            <div className="customization-option">
              <label>Ingredients:</label>
              <div>
                <input
                  type="checkbox"
                  onChange={() => handleIngredientChange('Extra Cheese')}
                />
                Extra Cheese
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={() => handleIngredientChange('Olives')}
                />
                Olives
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={() => handleIngredientChange('Peppers')}
                />
                Peppers
              </div>
            </div>

            <div className="customization-option">
              <label>Add-Ons:</label>
              <div>
                <input
                  type="checkbox"
                  onChange={() => handleAddonChange('French Fries')}
                />
                French Fries
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={() => handleAddonChange('Soda')}
                />
                Soda
              </div>
            </div>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <button onClick={() => handleQuantityChange('decrement')}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange('increment')}>+</button>
            </div>
          </div>

          <button
            className="finish-customization-btn"
            onClick={() => handleAddToCart(addToCart)}
          >
            Finish Customizing
          </button>

          <Link to="/cart" className="back-to-cart-btn">
            View Cart
          </Link>
        </div>
      )}
    </CartContext.Consumer>
  );
};

export default OrderCustomization;
