import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonType from './PokemonType';
import PokemonData from './PokemonData'

const PokeData = ({ pokemonData, offset, setOffset }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const requests = pokemonData.map((pokemon) => axios.get(pokemon.url));
        const responses = await Promise.all(requests);
        const data = responses.map((response) => response.data);
        setPokemonDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonData]);

  const handleNextPage = () => {
    setOffset(offset + 20);
  };

  const handlePreviousPage = () => {
    if (offset >= 20) {
      setOffset(offset - 20);
    }
  };

  const [currentPokemon, setCurrentPokemon] = useState(null);

  const handlePokemonClick = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = response.data;
      console.log(data)
      setCurrentPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {currentPokemon ? (
        <PokemonData pokemonData={currentPokemon} />
     ):(<ul className="listaPokemons">
      <li className='botonSigAnt'>
        <button className="SigAntPageSup" onClick={handlePreviousPage} disabled={offset === 0}>
          Anterior
        </button>
        <button className="SigAntPageSup" onClick={handleNextPage} disabled={offset >= 980}>
          Siguiente
        </button>
      </li>
      <li>
        <div className='pokemonDetalles'>
          <p className='pokemonDexNum' >Número</p>
          <div className='pokemonDexImgSpc'>
            <p className='header'>Diseño</p>
          </div>
          <p className='pokemonDexNameHeader'>Nombre</p>
          <div className='pokemonTipos' >
            <p>Tipos</p>
          </div>
        </div>
      </li>
      {pokemonDetails.map((pokemon) => (
        <li key={pokemon.id}>
          <div className='pokemonDetalles'>
            <p className='pokemonDexNum' >Nº {pokemon.id}</p>
            <div className='pokemonDexImgSpc'>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                className='pokemonDexImg'
              />
            </div>
            <p className='pokemonDexName' onClick={() => handlePokemonClick(pokemon.name)}>
                {pokemon.name}
              </p>
            {pokemon.types && pokemon.types.length > 0 ? (
              <div className='pokemonTipos' >
                {pokemon.types.map((type, index) => (
                  <PokemonType key={index} type={type.type.name} />
                ))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
      <li className='botonSigAnt'>
        <button className="SigAntPageInf" onClick={handlePreviousPage} disabled={offset === 0}>
          Anterior
        </button>
        <button className="SigAntPageInf" onClick={handleNextPage} disabled={offset >= 980}>
          Siguiente
        </button>
      </li>
    </ul>)}
    </>
  );
};

export default PokeData;
