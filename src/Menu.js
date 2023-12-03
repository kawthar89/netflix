import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
function Menu ()  {
  return (
   
    <div>
   <div className='haute'>
   <img className='logonet' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>
    <div className='buttonet'>
    <button>s'identifier</button>
    </div>
    </div>
    <div>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Francais
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </div>
  <div className="centre">
  <p>Films et série en illimité, et bien plus</p>
    <input type='texte' placeholder='Adresse e-mail'></input>
    <button ONCLICK>Commencer</button>
    </div>
    </div>
  )
}


export default Menu ;