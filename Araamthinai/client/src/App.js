import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register';
import PaymentOptions from './components/PaymentOption';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import Dashboard from './components/Dashboard';
import {ToastContainer} from 'react-toastify';

const App = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <Router>
        <ThemeProvider theme={theme}>          
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/payment" element={<PaymentOptions/>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
