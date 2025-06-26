// import React, { useEffect } from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Home from './Pages/Home';
// import Cart from './components/Cart';
// import Footer from './components/Footer';
// import TopHeader from './components/TopHeader';
// import DetailsPage from './components/DetailsPage';
// import CheckOut from './components/CheckOut';
// import LoginPage from './components/LoginPage';
// import SignUpPage from './components/SignUpPage';

// function App() {
//   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//   const location = useLocation();
//   const hideFooterRoutes = ['/detailspage'];

//   useEffect(() => {
//     // Uncomment this during development if you want to reset login on refresh
//     // localStorage.clear();
//   }, []);

//   return (
//     <>
//       {isLoggedIn && <TopHeader />}

//       <Routes>
//         {!isLoggedIn ? (
//           <>
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/signup" element={<SignUpPage />} />
//             <Route path="*" element={<Navigate to="/login" />} />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/detailspage" element={<DetailsPage />} />
//             <Route path="/checkout" element={<CheckOut />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </>
//         )}
//       </Routes>

//       {isLoggedIn && !hideFooterRoutes.includes(location.pathname) && <Footer />}
//     </>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import './App.css';
// import Home from './Pages/Home';
// import Cart from './components/Cart';
// import Footer from './components/Footer';
// import TopHeader from './components/TopHeader';
// import DetailsPage from './components/DetailsPage';
// import CheckOut from './components/CheckOut';
// import LoginPage from './components/LoginPage';
// import SignUpPage from './components/SignUpPage';

// function App() {
//   const location = useLocation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Update login status whenever route changes
//   useEffect(() => {
//     const loginStatus = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(loginStatus === "true");
//   }, [location.pathname]);

//   const hideFooterRoutes = ["/detailspage"];

//   return (
//     <>
//       {isLoggedIn && <TopHeader />}

//       <Routes>
//         {!isLoggedIn ? (
//           <>
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/signup" element={<SignUpPage />} />
//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/detailspage" element={<DetailsPage />} />
//             <Route path="/checkout" element={<CheckOut />} />
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </>
//         )}
//       </Routes>

//       {isLoggedIn && !hideFooterRoutes.includes(location.pathname) && <Footer />}
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import TopHeader from './components/TopHeader';
import DetailsPage from './components/DetailsPage';
import CheckOut from './components/CheckOut';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check login status every time route changes
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
  }, [location.pathname]);

  const hideFooterRoutes = ["/detailspage"];

  return (
    <>
      {isLoggedIn && <TopHeader />}

      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detailspage" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>

      {isLoggedIn && !hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
