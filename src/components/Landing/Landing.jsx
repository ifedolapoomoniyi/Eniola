import React from 'react'
import EniolaLanding from '../../imgs/EniolaLanding.png'
import './Landing.css'

const landing = () => {
  return (
    <div className="Landing">
        <img src={EniolaLanding} alt="A Beautiful Picture of Eniola Arogunbiade" />
        <div className="overlay"></div>

        <div className="landing-text">
            <div className="landing-name">
                <div className='landing-big-font'>ENIOLA </div>
                <span className='landing-normal-font'>AGUNBIADE</span>
            </div>
            <div className='landing-position'>
                Project Manager
            </div>
        </div>
    </div>
  )
}

export default landing