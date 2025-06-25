import './App.css'
import Express from './components/Express'
import Header from './components/Header'
import React from 'react'
import HeroSlider from './components/HeroSection'
import PopularProducts from './components/Popular'
import BestsellerSlider from './components/BestSelller'
import Cilent from './components/Cilent'
import Footer from './components/Footer'
import SakroobCircle from './components/SakroobCircle'
import Raspberry from './components/Raspberry'
import Blog from './components/Blog'
import TopHeader from './components/TopHeader'
import Cart from './components/Cart'
import DetailsPage from './components/DetailsPage'




function App() {

  return (
    <>
      {/* <TopHeader /> */}
      <Header />  
      <HeroSlider />  
      <Express /> 
       <PopularProducts/> 
       <BestsellerSlider/>
      <Blog/>
      <Cilent />
      <SakroobCircle />
      <Footer />
      <Cart />
      <DetailsPage />

      
      
      
    </>
  )
}

export default App
