import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonType from './PokemonType';

const PokeData = ({ pokemonData }) => {
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

  return (
    <ul className="listaPokemons">
      {pokemonDetails.map((pokemon, index) => (
        <li key={pokemon.name}>
          <div className='pokemonDetalles'>
            <p className='pokemonDexNum' >Nº {index + 1}</p>
            <div className='pokemonDexImgSpc'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              className='pokemonDexImg'
            />
            </div>
            <a href='/' className='pokemonDexName'>{pokemon.name}</a>
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
    </ul>
  );
};

export default PokeData;
