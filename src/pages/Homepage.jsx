import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Landing from '../components/Landing/Landing'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='Homepage'>
    <Navbar/>
    <Landing/>
    <About/>
    <Footer/>
    </div>
  )
}

export default Homepage