
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import TopHeader from './components/TopHeader';
import DetailsPage from './components/DetailsPage';
import CheckOut from './components/CheckOut';
import SignUpPage from './components/SignUpPage';
import LoginUp from './Pages/LoginUp';
import BackToTop from './components/common/BackTotop';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const hideFooterRoutes = ['/detailspage'];

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loginTime", new Date().toLocaleTimeString());
  };

  return (
    <>
      {isLoggedIn && <TopHeader />}

      <Routes>
        <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
        <Route
          path="/login/*"
          element={isLoggedIn ? <Navigate to="/home" /> : <LoginUp onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/home" /> : <SignUpPage />}
        />
        {isLoggedIn && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detailspage" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOut />} />
          </>
        )}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
      </Routes>

      {isLoggedIn && !hideFooterRoutes.includes(location.pathname) && <Footer />}
      <BackToTop />
    </>
  );
}

export default App;
