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
          <div><UilYoutube/></div>
          <div><UilLinkedin/></div>
          <div><UilInstagram/></div>
          <div><UilTwitter/></div>
          
        </div>
    </div>
  )
}

export default Footer