import React from 'react'
import logo from '../images/pokebola.png'

export default function Header() {
  return (
    <header className='header'>
        <nav className='navegacionBut'>
          <a href='/' className='Logo-Dex'>
            <img src={logo} alt='Poke-Dex Logo'/>
            
            <span>Poke-Dex</span>
          </a>
        </nav>  
    </header>
  )
}
