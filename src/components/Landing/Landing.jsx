import React from 'react'
import Eni from '../../imgs/Eni.png'
import './Landing.css'

const landing = () => {
  return (
    <div className="Landing">
        <img src={Eni} alt="A Beautiful Picture of Eniola Arogunbiade" />
        <div className="landing-text">
            <div className="landing-name">
                Eniola <span>Agunbiade</span>
            </div>
            <div className='landing-position'>
                Project Manager
            </div>
        </div>
    </div>
  )
}

export default landing