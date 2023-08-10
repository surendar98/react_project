import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register';
import PaymentOptions from './components/PaymentOption';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import Dashboard from './components/Dashboard';
import { StyledEngineProvider } from '@mui/styled-engine';
import './App.css';

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
 
  const [isUserLoggedIn, setUserLoggedIn] = useState(JSON.parse(sessionStorage.getItem('user')) !== null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const userLoggedIn = JSON.parse(sessionStorage.getItem('user')) !== null;
      if (userLoggedIn !== isUserLoggedIn) {
        setUserLoggedIn(userLoggedIn);
      }
    }, 1000); 

    return () => {
      clearInterval(interval);
    };
  }, [isUserLoggedIn]);
  

  const PrivateRoute = () =>{
    return(
      <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/payment" element={<PaymentOptions/>} />
      </Routes>
    )
  }

  const PublicRoute = () =>{
    return(
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />      
    </Routes>
    )
  }

  return (
    <Router>
        <ThemeProvider theme={theme}>  
        <StyledEngineProvider injectFirst>        
        {isUserLoggedIn  ? <PrivateRoute/>:<PublicRoute/>}
        </StyledEngineProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
