import React from 'react'
import './ResumeCards.css'

const ResumeCards = (props) => {

  return (
    <div className="ResumeCards">
        <div>
            <img src={props.src} alt="" className="card-img"/>
        </div>
        <div className="card-details">
          <div className='details-flexer'>
            <div>{props.title}</div>
            <div className='timeline'>{props.timeline}</div>
          </div>
          <ul>
            {props.children}
          </ul>
        </div>
    </div>
  )
}

export default ResumeCards