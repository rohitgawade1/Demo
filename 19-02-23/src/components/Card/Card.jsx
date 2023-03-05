import React from 'react'
import './Card.css'

const Card = ({data}) => {
  return (
    <div className='card-container'>
        <img src={data.img_link} alt="" />
        <div className='project-name-container'>
            <h4 className='project-name'>{data.name}</h4>
        </div>
    </div>
  )
}

export default Card