import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PokemonType from './PokemonType';

const PokeData = ({ pokemonData, offset, setOffset }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const navigate = useNavigate();

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
    const newOffset = offset + 20;
    setOffset(newOffset)
    navigate(`/pokemon?from=${newOffset+1}&to=${newOffset+20}`);
  };

  const handlePreviousPage = () => {
    if(offset>= 20){
      const newOffset = offset - 20;
      setOffset(newOffset)
      navigate(`/pokemon?from=${newOffset+1}&to=${newOffset+20}`);
    }
  };

  const handlePokemonClick = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = response.data;

      navigate(`/pokemon/${pokemonName}`, {state: {pokemonData: data}})
    } catch (error) {
      console.error(error);
    }

    
  };

  return (
    <>
    <ul className="listaPokemons">
      <li className='botonSigAnt'>
        <button className={offset === 0 ? "SigAntDisable" : "SigAntPage"} onClick={handlePreviousPage} disabled={offset === 0}>
          Anterior
        </button>
        <button className={offset >= 980 ? "SigAntDisable" : "SigAntPage"} onClick={handleNextPage} disabled={offset >= 980}>
          Siguiente
        </button>
      </li>
      <li>
        <div className='pokemonDetalles'>
          <p className='pokemonDexNum' >Número</p>
          <div className='pokemonDexImgSpc headersLista'>
            <p className='header'>Diseño</p>
          </div>
          <p className='pokemonDexNameHeader headersLista'>Nombre</p>
          <div className='pokemonTipos headersLista' >
            <p>Tipos</p>
          </div>
        </div>
      </li>
      {pokemonDetails.map((pokemon) => (
        <li key={pokemon.id}>
          <div className='pokemonDetalles' onClick={() => handlePokemonClick(pokemon.name)}>
            <p className='pokemonDexNum' >Nº {pokemon.id}</p>
            <div className='pokemonDexImgSpc'>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                className='pokemonDexImg'
              />
            </div>
            <p className='pokemonDexName'>
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
        <button className={offset === 0 ? "SigAntDisable" : "SigAntPage"} onClick={handlePreviousPage} disabled={offset === 0}>
          Anterior
        </button>
        <button className={offset >= 980 ? "SigAntDisable" : "SigAntPage"} onClick={handleNextPage} disabled={offset >= 980}>
          Siguiente
        </button>
      </li>
    </ul>
    </>
  );
};

export default PokeData;
