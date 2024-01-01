import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import PokeData from './PokeData';
import Footer from './Footer';

const Main = () => {
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const handleNavigate = (to) => {
    navigate(to);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;

        const response = await axios.get(url);
        const data = response.data;
        setPokemonData(data.results); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [offset, searchTerm]);

  return (
    <>
      <Header 
      onSearch={handleSearch}
      onNavigate={handleNavigate}
      />
      <main className='pokeMain'>
        <PokeData
          pokemonData={pokemonData}
          offset={offset}
          setOffset={setOffset}
        />
      </main>
      <Footer/>
    </>
  );
};

export default Main;
