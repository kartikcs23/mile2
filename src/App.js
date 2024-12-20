import './components/Styles.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import Order from './components/Order';
import OrderCustomization from './components/OrderCustomization';
import { CartProvider } from './context/CartContext';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </Router>
  );
};

const MainApp = () => {
  const location = useLocation();

  // Check if the current page is Login or SignUp
  const isStandalonePage = location.pathname === '/' || location.pathname === '/signup';

  return (
    <div className="app">
      {!isStandalonePage && <Navbar />}

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Default route is now Login */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-cust" element={<OrderCustomization />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>

      {!isStandalonePage && <Footer />}
    </div>
  );
};

export default App;
