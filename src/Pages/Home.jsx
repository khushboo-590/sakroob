import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
// import Services from '../components/Services'
import Blog from '../components/Blog'
import Cilent from '../components/Cilent'
import BestSeller from '../components/BestSeller'
import Express from '../components/Express'
import SakroobCircle from '../components/SakroobCircle'
import Popular from '../components/Popular'
import TopHeader from '../components/TopHeader'
import DetailPage from '../components/DetailsPage'
// import Cart from '../components/Cart'

const Home = () => {
    return (
        <div>
        <TopHeader/>
            <Header />
            <Hero />
            <Express />
            <Popular />
            <BestSeller />
            <Blog />
            <Cilent/>
            <SakroobCircle />

{/* <DetailPage/> */}
            {/* <Cart/> */}
        </div>
    )
}

export default Home