import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='grand-box'>
    <img src='https://braindamaged.fr/wp-content/uploads/2021/08/netflix-la-plateforme-augmente-ses-tarifs-une.jpg' />
      <div className='navbar'>
      <img src='./logo.png' alt='logo' />
      <div className='btn'>
     <button>francais</button>
     <button onclick >s'identifier</button>
     
     </div>
      </div>
     
      <p className='txt-center'>Films et série en illimité, et bien plus</p>
      <div className="centre">
        <input type='texte' placeholder='Adresse e-mail'></input>
        <button ONCLICK>START</button></div>
       
    </div>
    
  )
}

export default Header
