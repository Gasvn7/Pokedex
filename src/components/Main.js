import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokeData from './PokeData';
import PokeSideBar from './PokeSideBar';
import PokemonData from './PokemonData'

const Main = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
        if (searchTerm) {
          url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
        }
        const response = await axios.get(url);
        const data = response.data;
        if (searchTerm) {
          setPokemonData(data);
        } else {
          setPokemonData(data.results); 
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [offset, searchTerm]);

  return (
    <main className='pokeMain'>
      <PokeSideBar onSearch={handleSearch} />
      
      {searchTerm ? 
      <PokemonData pokemonData={pokemonData} /> 
      : 
      <PokeData pokemonData={pokemonData} offset={offset} setOffset={setOffset} />}
    </main>
  );
};

export default Main;
