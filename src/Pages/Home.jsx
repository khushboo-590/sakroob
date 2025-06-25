import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import Cilent from '../components/Cilent'
import BestSeller from '../components/BestSeller'
import Express from '../components/Express'
import SakroobCircle from '../components/SakroobCircle'
import Popular from '../components/Popular'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Express />
            <Popular />
            <BestSeller />
            <Blog />
            <Cilent/>
            <SakroobCircle />
        </div>
    )
}

export default Home