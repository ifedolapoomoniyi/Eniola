import React from 'react'
import './TopDescrip.css'

const TopDescrip = (props) => {
  return (
    <div className="TopDescrip">
        <div className="top-image">
            <img src={props.src} alt="" />
            
        </div>
        <div className="top-texts">
            <h3 className='fontface-tahu'>{props.title}</h3>
            <div className="top-comments">
                <div className='line-height'>{props.comments}</div>
                <div className='commenter'>{props.name}</div>
                <div className='commenter-pic'>
                    <img src={props.picture} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopDescrip