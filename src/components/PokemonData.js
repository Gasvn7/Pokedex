import React from 'react';
import PokemonType from './PokemonType';

const PokemonData = ({ pokemonData }) => {
  if (Array.isArray(pokemonData)) {
    console.log('Cargando')
    return <div>Loading...</div>

  } else if (typeof pokemonData === 'object' && pokemonData !== null) {

    let etiquetHab;
    let habilidades = [];
    let etiquetHabOc;
    let habilidadesOc = [];
    if (pokemonData.abilities && pokemonData.abilities.length > 0) {
      pokemonData.abilities.forEach((abilities1, index) => {
        let nombre = abilities1.ability.name;
        nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    
        if (abilities1.is_hidden === false) {
          etiquetHab = index === 0 ? "Habilidad" : "Habilidades"
          habilidades.push(<p key={index}>{nombre}</p>);
        } else {
          etiquetHabOc = index === 0 ? "Hab. Oculta" : "Hab. Ocultas"
          habilidadesOc.push(<p key={index}>{nombre}</p>);
        }
      });
    }
    console.log(habilidades, habilidadesOc);
    

    // SI TIENE HABILIDAD ESCONDIDA SE CREARÁ UN ELEMENTO CON CONDICIONAL PARA MOSTRAR HABILIDAD OCULTA

    let altura
    let peso
    const comaAlNum = (alt, pes) => {
      altura = alt.toString();
      peso = pes.toString();
  
      if (altura.length === 1 && peso.length === 1) {
        altura = `0,${altura[0]}`;
        peso = `0,${peso[0]}`
      } else if(altura.length === 1){
        altura = `0,${altura[0]}`;
        peso = peso.slice(0, -1) + "," + peso.slice(-1);
      } else if(peso.length === 1) {
        peso = `0,${peso[0]}`
        altura = altura.slice(0, -1) + "," + altura.slice(-1);
      } else {
        altura = altura.slice(0, -1) + "," + altura.slice(-1);
        peso = peso.slice(0, -1) + "," + peso.slice(-1);
      }
    }
  
    comaAlNum(pokemonData.height, pokemonData.weight)
  
    return (
      <div className='pokeInd'>
        
        <div className='pokeIndSup'>
          <div className='pokeIndSupP1'>
            <p className='pokemonDexNameInd'>{pokemonData.name}</p>
            <p className='pokemonDexNumInd' >Nº{pokemonData.id}</p>
          </div>
          <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
          alt={pokemonData.name}
          className='pokemonDexImgInd'
          />
          <div className='pokeIndSupP2'>
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
        </div>
        <div className='pokeIndPartes'>
          <p className='pokeIndP1'>{etiquetHab}</p>
          <div className='pokeIndP2'>
            {habilidades}
          </div>
        </div>
        
        {habilidadesOc.length > 0 ?
          <div className='pokeIndPartes'>
            <p className='pokeIndP1'>{etiquetHabOc}</p>
            <div className='pokeIndP2'>
              {habilidadesOc}
            </div>
          </div>
          : null
        }
        <div className='pokeIndPartes'>
          <p className='pokeIndP1'>Peso</p>
          <div className='pokeIndP2'>
            <p>{peso} kg</p>
          </div>
        </div>
        <div className='pokeIndPartes'>
          <p className='pokeIndP1'>Altura</p>
          <div className='pokeIndP2'>
            <p>{altura} m</p>
          </div>
        </div>
  
      </div>
    );
  } else {
    return <div>ERROR</div>
  }
};

export default PokemonData;
