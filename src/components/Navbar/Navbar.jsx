import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import {UilAngleDown} from "@iconscout/react-unicons"

const Navbar = () => {
  useEffect(()=> {
    const hamburger = document.querySelector('.hamburger');
    const navbarRoutes = document.querySelector('.navbar-routes');

    hamburger.addEventListener('click', mobileMenu);

    function mobileMenu() {
    //   if(hamburger.classList('active')){
    //     hamburger.classList.remove('active')
    //   }
    //   else{hamburger.classList.add('active')}
    //   navbarRoutes.classList.toggle('active');
    // 
    navbarRoutes.classList.toggle('active')
    hamburger.classList.toggle('active')
  }

    const navbarLink =  document.querySelectorAll('.navbar-link');

    navbarLink.forEach((n)=> n.addEventListener('click', closeMenu));

    function closeMenu() {
      hamburger.classList.toggle("active");
      navbarRoutes.classList.toggle("active");     
    }

    const clicker = document.querySelector('.resume-link')
    const dropdownEl = document.getElementById('dropdown')
    clicker.addEventListener('click', dropdown)
    function dropdown(){
      console.log("it works")
      dropdownEl.classList.toggle('active')
    }

  }, []);


  return (
    <div className="navbar">
        <div className="navbar-name">
            <Link to="/" className="navbarlink">
                <span className='fontface-tahu big-font'>ENIOLA</span>
                <span className='normal-font'>AGUNBIADE</span>
            </Link>
        </div>
        <div className="navbar-routes">
            <Link to='/' className="navbar-link">HOME</Link>
            <Link to='/' className="navbar-link">BIO</Link>
            <div className="resume-link">RESUME<span><UilAngleDown/></span></div>
            <div id='dropdown'>
              <Link to='/Project'>PROJECT MANAGEMENT</Link>
              <Link to='/Writing'>WRITING</Link>
              <Link to='/Content'>CONTENT CREATION</Link>
              <Link to='/Marketing'>DIGITAL MARKETING</Link>
            </div>
            <a href="#contact"  className="navbar-link">CONTACT US</a>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
    </div>
  )
}

export default Navbar