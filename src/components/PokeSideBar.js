import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PokeSideBar({ onSearch, onNavigate }) {
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
    <div className='sidebar'>
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
      <a href='/' className='sidebarLinks'>Lista de pokémon</a>
      {/* <a href='/' className='sidebarLinks'>Equipos</a> */}
      {/* <a href='/' className='sidebarLinks'>Regiones</a> */}
    </div>
  );
}

PokeSideBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default PokeSideBar;
