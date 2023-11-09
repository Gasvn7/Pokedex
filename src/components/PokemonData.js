import React from 'react';
import PokemonType from './PokemonType';

const PokemonData = ({ pokemonData }) => {
  console.log(pokemonData)
  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pokeInd'>
      
      <p className='pokemonDexNameInd'>{pokemonData.name}</p>
      <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
      alt={pokemonData.name}
      className='pokemonDexImgInd'
      />
      <p className='pokemonDexNumInd' >Nº {pokemonData.id}</p>
      <div className='pokeIndPartes'>
        <p className='pokeIndP1'>Tipo</p>
        <div className='pokeIndP2'>
        {pokemonData.types && pokemonData.types.length > 0 ? (
            <div className='pokemonTiposInd' >
            {pokemonData.types.map((type, index) => (
                <PokemonType key={index} type={type.type.name} />
            ))}
            </div>
          ) : null}
        </div>
      </div>
      <p>Habilidad: </p>
      <p>Peso: {pokemonData.weight}</p>
      <p>Altura: {pokemonData.height}</p>

    </div>
  );
};

export default PokemonData;
