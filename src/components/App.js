import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './Main';
import PokemonData from './PokemonData';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/pokemon' element={<Main />}/>
        <Route path='/pokemon/:nombreParams' element={<PokemonData />}/>
      </Routes>
    </div>
  );
}

export default App;