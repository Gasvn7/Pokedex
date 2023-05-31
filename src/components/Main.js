import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokeData from './PokeData';

const Main = () => {

    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                /* Para mostrar todos los pokemons usar pokemon?limit=1010&offset=0 */
              const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
              const data = response.data;
              setPokemonData(data.results);
            } catch (error) {
              console.log(error);
            }
          };
          

        fetchPokemonData();
    }, [])

    return (
    <main>
        <PokeData pokemonData={pokemonData}/>
    </main>
    )
}

export default Main;
