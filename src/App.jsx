


import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import TopHeader from './components/TopHeader';
import DetailsPage from './components/DetailsPage';
import CheckOut from './components/CheckOut';
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation();
  const hideFooterRoutes = ["/detailspage"];

  return (
    <>
      {isLoggedIn && <TopHeader />}

      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detailspage" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOut />} />
          </>
        )}
      </Routes>

      {isLoggedIn && !hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
