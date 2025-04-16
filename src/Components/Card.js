import React from 'react'

const Card = ({image, name}) => {
  return (
    <div>
      <img src={image} alt='' />
      <h1>{name}</h1>
    </div>
  )
}

export default Card
