import React from 'react'
import {UilEnvelope, UilYoutube, UilInstagram, UilTwitter, UilLinkedin} from '@iconscout/react-unicons';
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-email">
            <a href='mailto:eniolaagunbiade@gmail.com'>
              <span><UilEnvelope/></span>
              <span>eniolaagunbiade2@gmail.com</span>
            </a>
        </div>

        <div className="footer-socials">
          <a href="https://youtube.com/C/EniolaDivine"><div><UilYoutube/></div></a>
          <a href="https://www.linkedin.com/in/eniola-agunbiade-102370239"><div><UilLinkedin/></div></a>
          <a href="https://www.instagram.com/eniola_divine"><div><UilInstagram/></div></a>
          <a href="https://twitter.com/EniolaDivine"><div><UilTwitter/></div></a>
          
        </div>
    </div>
  )
}

export default Footer