import React, { useState } from 'react';

const Order = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    item: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your order, ${orderDetails.name}!`);
    setOrderDetails({ name: '', email: '', item: '' }); 
  };

  return (
    <div className="order-container">
        <div className="navbar-spacer"></div>
      <h1 className="order-heading">Place Your Order</h1>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={orderDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={orderDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="item">Select Menu Item:</label>
          <select
            id="item"
            name="item"
            value={orderDetails.item}
            onChange={handleChange}
            required
          >
            <option value="">--Select an Item--</option>
            <option value="Classic Burger">Classic Burger</option>
            <option value="Veggie Pizza">Veggie Pizza</option>
            <option value="Pasta Primavera">Pasta Primavera</option>
            <option value="Grilled Chicken Salad">Grilled Chicken Salad</option>
            <option value="Chocolate Lava Cake">Chocolate Lava Cake</option>
            <option value="Tacos Supreme">Tacos Supreme</option>
          </select>
        </div>
        <button type="submit" className="order-button">Place Order</button>
      </form>
    </div>
  );
};

export default Order;
