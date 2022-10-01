import React, { useEffect } from 'react'
import './Navbar.css'

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
  }, []);

  return (
    <div className="navbar">
        <div className="navbar-name">
            <a href="#" className="navbarlink">
                <span>Eniola</span>
                <span>Agunbiade</span>
            </a>
        </div>
        <div className="navbar-routes">
            <a href="#about" className="navbar-link">Home</a>
            <a href="#skills" className="navbar-link">Bio</a>
            <a href="#" className="navbar-link">Resume</a>
            <a href="#contact"  className="navbar-link">Contact Us</a>
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