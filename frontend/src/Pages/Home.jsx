import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <About />
            <Qualities />
            <Menu />
            <Reservation />
            <Footer/>
        </>
    )
}
export default Home