import React, { useState } from 'react'

const Addprod = ({fnct}) => {
    const [newfilm, setnewfilm] = useState({name:"",year:"",img:"",rating:""})
  return (
    <div className='ajout'>
      <input type='text' placeholder='name' onChange={(e)=>setnewfilm({...newfilm,name:e.target.value})}/>
      <input type='text' placeholder='Year' onChange={(e)=>setnewfilm({...newfilm,Year:e.target.value})}/>
      <input type='text' placeholder='img' onChange={(e)=>setnewfilm({...newfilm,img:e.target.value})}/>
      <input type='text' placeholder='rating' onChange={(e)=>setnewfilm({...newfilm,rating:e.target.value})}/>
      <button onClick={()=>fnct(newfilm)}>ADD MOVIE</button>
    </div>
  )
}

export default Addprod
