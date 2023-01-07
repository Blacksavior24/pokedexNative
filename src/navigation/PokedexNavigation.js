import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokedexScreen from '../screens/Pokedex'
import PokemonScreen from '../screens/Pokemon'

const Stack = createNativeStackNavigator()

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="Pokedex Screen" 
          component={PokedexScreen}
          options={{title: "", headerTransparent: true}}  
        />
        <Stack.Screen 
          name="Pokemon Screen" 
          component={PokemonScreen} 
          options={{title: "", headerTransparent: true}}
          />
      
    </Stack.Navigator>
  )
}