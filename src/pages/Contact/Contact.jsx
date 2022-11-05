import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.css'
import {UilEnvelope} from '@iconscout/react-unicons'

const Contact = () => {
  return (
    <div className="Contact">
        <Navbar/>
        <div className="contact-us">
          <h3>Leave a Message through any of the following channels</h3>
            <div className="contact-section">
              <div className="contact-email">
                <a href="mailto:"><UilEnvelope/></a>
              </div>
            </div>
            <div className="contact-img">
                
            </div>
        </div>
        




        <Footer/>
    </div>
  )
}

export default Contact