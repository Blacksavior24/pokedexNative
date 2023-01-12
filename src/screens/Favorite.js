import { Button, SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import {getPokemonsFavoriteApi} from "../api/favorite"
import useAuth from "../hooks/useAuth"
import {getPokemonDetailsApi} from "../api/pokemon"
import PokemonList from "../components/PokemonList";
import {useFocusEffect} from "@react-navigation/native"
import NoLogged from '../components/NoLogged'

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const {auth} = useAuth();


  useFocusEffect(
    useCallback(() => {
      if(auth){
      (async ()=>{
          const response = await getPokemonsFavoriteApi();
          const pokemonArray = [];
        for await (const id of response){
          const pokemonDetails = await getPokemonDetailsApi(id)
  
          pokemonArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image: pokemonDetails.sprites.other["official-artwork"].front_default
          })
  
        }
        setPokemons(pokemonArray)
      })();
    }
    }, [auth])
    
  )

  


  return (
    !auth? 
      <NoLogged />:
      <PokemonList pokemons={pokemons} /> 
  )
}