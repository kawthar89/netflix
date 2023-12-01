import React from 'react'

const Card = (data) => {
  return (
    <div>
      <img src={data.img}/>
      <h1>{data.name}</h1>
      <h3>{data.Year}</h3>
    </div>
  )
}

export default Card
