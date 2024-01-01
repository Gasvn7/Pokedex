import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import PokeSideBar from './PokeSideBar';
import PokemonType from './PokemonType';
import Footer from './Footer';

const PokemonData = () => {
  const { nombreParams } = useParams();
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombreParams}`);
        const data = response.data;
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    };

      fetchData();
  }, [nombreParams, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleNavigate = (to) => {
    navigate(to);
  };
  
  if (Array.isArray(pokemonData)) {
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
          habilidadesOc.push(<p key={index}> {nombre}</p>);
        }
      });
    }

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
  
    const stats = pokemonData.stats || [];
    const statElements = stats.map((stat, index)=>(
      <div  key={index} className='pokeIndPartes'>
        <p className='pokeIndP1'>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</p>
        <div className='pokeIndP2'>
          <p>{stat.base_stat}</p>
        </div>
      </div>
    ))

    const goBack = () => {
      navigate(-1)
    }

    return (
      <>
      <Header/>
      <main className='pokeMain'>
        <PokeSideBar
          onSearch={handleSearch}
          onNavigate={handleNavigate}
          />
        <div className='pokeInd'>
          <p className='flotante' onClick={goBack}>Volver</p>
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
          <h1>Datos</h1>
          {statElements}
    
          </div>
        </main>
        <Footer/>
      </>
    );
  } else {
    return <div>ERROR</div>
  }
};

export default PokemonData;
