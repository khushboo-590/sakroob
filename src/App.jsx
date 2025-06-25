// import './App.css'
// import Express from './components/Express'
// import Header from './components/Header'
// import React from 'react'
// import Hero from './components/Hero'
// import Popular from './components/Popular'
// import BestsellerSlider from './components/BestSeller'
// import Cilent from './components/Cilent'
// import Footer from './components/Footer'
// import SakroobCircle from './components/SakroobCircle'
// import Blog from './components/Blog'
// import TopHeader from './components/TopHeader'
// import Cart from './components/Cart'
// import DetailsPage from './components/DetailsPage'

// function App() {
//   return (
//     <>
//       {/* <TopHeader /> */}
//       <Header />  
//       <Hero />  
//       <Express /> 
//        <Popular/> 
//        <BestsellerSlider/>
//       <Blog/>
//       <Cilent />
//       <SakroobCircle />
//       <Footer />
//       {/* <Cart /> */}
//       {/* <DetailsPage />      */}
//     </>
//   )
// }

// export default App
import React from 'react';
import './App.css';
import Header from './components/Header';
// import LoginUp from './Pages/LoginUp';
import Home from './Pages/Home';
import Footer from './components/Footer';

function App() {
  // const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      {/* {!isLoggedIn && <LoginUp />}
      {isLoggedIn && ( */}
        <>
          {/* <Header /> */}
          <Home />
          <Footer />
        </>
      {/* // )} */}
    </>
  );
}

export default App;
