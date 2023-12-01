import React, { useState } from 'react'

const Addprod = (fnct) => {
    const [newfilm, setnewfilm] = useState({name:"",year:"",img:""})
  return (
    <div>
      <input type='text' placeholder='name' onChange={(e)=>setnewfilm({...newfilm,name:e.target.value})}/>
      <input type='text' placeholder='Year' onChange={(e)=>setnewfilm({...newfilm,Year:e.target.value})}/>
      <input type='text' placeholder='img' onChange={(e)=>setnewfilm({...newfilm,img:e.target.value})}/>
      <button onClick={()=>fnct(newfilm)}>Add to list</button>
    </div>
  )
}

export default Addprod
