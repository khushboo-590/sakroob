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
function App() {

  return (
    <>
       {/* <Header />  */}
      {/* <Express /> */}
      {/* <HeroSlider/>  */}
      {/* <PopularProducts/> */}
      {/* <BestsellerSlider/> */}
      <Blog/>
      <Raspberry />
      <Cilent />
      <SakroobCircle />
      <Footer />
      
      
      
    </>
  )
}

export default App
