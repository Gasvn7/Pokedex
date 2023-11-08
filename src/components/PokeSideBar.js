import React, { useState } from 'react';

function PokeSideBar( { onSearch } ) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='sidebar'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscar pokémon" value={searchTerm} onChange={handleInputChange} />
        <button type="submit" className="search-button">
         <i className='bx bx-search'></i>
        </button>
      </form>
      <a href='/' className='sidebarLinks'>Inicio</a>
      <a href='/' className='sidebarLinks'>Equipos</a>
      <a href='/' className='sidebarLinks'>Regiones</a>
    </div>
  );
}

export default PokeSideBar;
