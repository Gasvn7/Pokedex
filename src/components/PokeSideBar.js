import React from 'react';

function PokeSideBar() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para manejar la búsqueda del Pokémon
  };

  return (
    <div className='sidebar'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscar pokémon" />
        <button type="submit" className="search-button">
         <i className='bx bx-search'></i>
        </button>
      </form>
      <a href='/'>Aasdasd</a>
      <a href='/'>asdasdas</a>
      <a href='/'>oaoao</a>
    </div>
  );
}

export default PokeSideBar;
