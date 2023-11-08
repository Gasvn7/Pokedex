import React from 'react';
import PokemonType from './PokemonType';

const PokemonData = ({ pokemonData }) => {
  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <ul className='listaPokemons'>
        <li>
        <p className='pokemonDexNum' >Número {pokemonData.id}</p>
        <div className='pokemonDexImgSpc'>
            <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
            alt={pokemonData.name}
            className='pokemonDexImg'
            />
        </div>
        <p className='pokemonDexName'>{pokemonData.name}</p>
        {pokemonData.types && pokemonData.types.length > 0 ? (
            <div className='pokemonTipos' >
            {pokemonData.types.map((type, index) => (
                <PokemonType key={index} type={type.type.name} />
            ))}
            </div>
        ) : null}
        </li>
    </ul>
  );
};

export default PokemonData;
