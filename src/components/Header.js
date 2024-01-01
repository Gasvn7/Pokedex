import React, { useState } from 'react'
import logo from '../images/pokebola.png'
import PropTypes from 'prop-types';
function Header({ onSearch, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);

    onNavigate(`/pokemon/${searchTerm.toLowerCase()}`);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className='header'>
        <nav className='navegacionBut'>
          <a href='/' className='Logo-Dex'>
            <img src={logo} alt='Poke-Dex Logo'/>
            <span>Poke-Dex</span>
          </a>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar pokémon"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button type="submit" className="search-button">
              <i className='bx bx-search'></i>
            </button>
          </form>
        </nav>  
    </header>
  )
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default Header;