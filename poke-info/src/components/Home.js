import getPokemons from '../services/getPokemons';
import React, { useState, useEffect } from "react";
import PokemonSummary from './home_components/PokemonSummary';



function Home() { 
  const [pokemonList, setPokemonList] = useState(null);
  

  useEffect(() => {
    const response = async () => { 
      const data = await getPokemons();
      setPokemonList(data);
    }

    response();
    
  }, [])


  
  return (
    <div>
      <h1>Home</h1>
      <PokemonSummary data={pokemonList} />
      {/* <div>{JSON.stringify(pokemonList)}</div> */}
      
    </div>
  )
}

export default Home;