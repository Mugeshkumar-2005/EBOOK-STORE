import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import EbookReader from './components/EbookReader';
import Checkout from './components/Checkout';
import Reviews from './components/UserReviews';
import UserAccount from './components/UserAccount';
import Payment from './components/Payment';
import Footer from './Footer';
import LoginPage from './components/LoginPage';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const onLoginSuccess = () => {
      setIsLoggedIn(true);
    };
    const onLogout = () => {
      setIsLoggedIn(false);
    };
  

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar onLogout={onLogout}/>
          <Routes>
            <Route path="/" element={<Catalog/>} />
            <Route path="/reader" element={<EbookReader />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <LoginPage onLoginSuccess={onLoginSuccess} />
      )}
    </Router>
  );
}

export default App;
