import React from 'react'
import './ResumeCards.css'

const ResumeCards = (props) => {

  return (
    <div className="ResumeCards">
        <div>
            <img src={props.src} alt="" className="card-img"/>
        </div>
        <div className="card-details">
          <div>
            <div>{props.title}</div>
            <div>{props.timeline}</div>
          </div>
          <ul>
            <li>{props.details1}</li>
            {props.children}
          </ul>
        </div>
    </div>
  )
}

export default ResumeCards