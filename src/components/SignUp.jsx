import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.includes('@')) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
      navigate('/home'); 
    }
  };

  return (
    
    <div div style={{backgroundColor:"pink"}}>
    <h1 style={{ fontFamily: "cursive", fontSize:'60px'}}>Food Plaza</h1>
    <div  className='signup-form ' style={{ maxWidth: '400px', margin: 'auto', padding: '1em' }}>
      <h2>Sign Up</h2>
      {submitted && <div style={{ color: 'green' }}>Sign-Up Successful!</div>}
      <form className='form-group ' onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1em' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5em' }}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>

        <div style={{ marginBottom: '1em' }}>
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

        <div style={{ marginBottom: '1em' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5em' }}
          />
          {errors.password && (
            <div style={{ color: 'red' }}>{errors.password}</div>
          )}
        </div>

        <div style={{ marginBottom: '1em' }}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5em' }}
          />
          {errors.confirmPassword && (
            <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" style={{ padding: '0.5em 1em', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
    </div></div>
  );
};

export default SignUp;
