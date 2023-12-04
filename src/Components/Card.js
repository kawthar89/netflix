import React from 'react'
import ReactStars from 'react-rating-stars-component'    ;

const Card = ({data}) => {
  return (
    <div>
      <img  className='img-card'src={data.img}/>
      <h1>{data.name}</h1>
      <h3>{data.Year}</h3>
      <h4> <ReactStars
      count={10}
      size={24}
      value={data.rating}
      isHalf={true}
      edit={false}
      activeColor="#ffd700"
    />,</h4>
    </div>
  )
}

export default Card
