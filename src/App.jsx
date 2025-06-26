import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import TopHeader from './components/TopHeader';
import DetailsPage from './components/DetailsPage';
import CheckOut from './components/CheckOut';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LogInPage';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const location = useLocation();
  const hideFooterRoutes = ['/detailspage'];

  return (
    <>
      {isLoggedIn && <TopHeader />}

      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detailspage" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>

      {isLoggedIn && !hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
