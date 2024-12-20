import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.email.includes('@')) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login successful:', formData);
      navigate('/home'); // Redirect to home page
    }
  };

  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h1 style={{ fontFamily: 'cursive', fontSize: '60px' }}>Food Plaza</h1>
      <div className="login-form" style={{ maxWidth: '400px', margin: 'auto', padding: '1em' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5em' }}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5em' }}
            />
            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </div>
          <button type="submit" style={{ padding: '0.5em 1em', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link> {/* Link to SignUp */}
        </p>
      </div>
    </div>
  );
};

export default Login;
