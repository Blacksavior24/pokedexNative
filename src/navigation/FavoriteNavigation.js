import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokemonScreen from '../screens/Pokemon'
import FavoriteScreen from '../screens/Favorite'

const Stack = createNativeStackNavigator()

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="Favorite Screen" 
          component={FavoriteScreen}
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