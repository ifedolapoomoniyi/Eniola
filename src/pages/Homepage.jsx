import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Landing from '../components/Landing/Landing'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Landing/>
    <About/>
    <Footer/>
    </>
  )
}

export default Homepage