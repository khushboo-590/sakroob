import './App.css'
import Express from './components/Express'
import Header from './components/Header'
import React from 'react'
import HeroSlider from './components/HeroSection'
import PopularProducts from './components/Popular'
import BestsellerSlider from './components/BestSelller'

function App() {

  return (
    <>
       <Header /> 
      {/* <Express /> */}
      <HeroSlider/> 
      {/* <PopularProducts/> */}
      <BestsellerSlider/>
      
      
    </>
  )
}

export default App
