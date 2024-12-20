import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-list-left">
        <Link to="/" className="navbar-logo">Food Plaza</Link>
      </div>
      <ul className="navbar-list navbar-list-right">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/menu" className="navbar-link">Menu</Link></li>
        <li className="navbar-item"><Link to="/order-cust" className="navbar-link">Order Customization</Link></li>
        <li className="navbar-item"><Link to="/cart" className="navbar-link">Cart</Link></li>
        <li className="navbar-item"><Link to="/contact" className="navbar-link">Contact</Link></li>
        <li className="navbar-item"><Link to="/about" className="navbar-link">About Us</Link></li>
        <li className="navbar-item"><Link to="/feedback" className="navbar-link">Feedback</Link></li>
       
        
      </ul>
    </nav>
  );
};

export default Navbar; 
