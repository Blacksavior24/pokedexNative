import { SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(()=>{
    (async()=>{
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async() =>{
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);

      const pokemonArray = [];
      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)

        let newname = pokemonDetails.name.slice(-2) + pokemonDetails.name.slice(0,2)

        pokemonArray.push({
          id: pokemonDetails.id,
          name: newname,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.versions['generation-iii']['emerald'].front_default
        })

      }


      setPokemons([...pokemons, ...pokemonArray]);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <SafeAreaView>
      <PokemonList 
        pokemons={pokemons} 
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  )
}