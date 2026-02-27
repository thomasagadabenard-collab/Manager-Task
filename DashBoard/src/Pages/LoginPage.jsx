import React, { useState } from "react";
import './LoginPage.css'

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

  
   const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
        newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
        newErrors.password = "Password is required";
    } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted", { email, password });
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">
          <div className="logo-grid">
            <span className="grid-one"></span>
            <span></span>
            <span className="grid-three"></span>
            <span></span>
          </div>
        </div>

        <h1 className="welcome">Welcome Back</h1>
        <p className="subtitle">Sign in to your account to continue</p>

        <form className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "input error" : "input"}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type="password"
                placeholder="Enter your password"     
                value={password}           
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "input error" : "input"}
              />
            </div>
          </div>

          <div className="form-options">
            <label className="remember">
              <input type="checkbox" />Remember me
            </label>

            <a href="/" className="forgot">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn" onClick={handleSubmit}>
            Sign In
          </button>
        </form>

        <p className="signup-text">
          Don&apos;t have an account? <a href="/">Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
