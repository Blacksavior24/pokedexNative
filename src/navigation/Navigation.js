import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import FavoriteScreen from '../screens/Favorite';
import Account from '../screens/Account';
import Iconx from 'react-native-vector-icons/MaterialCommunityIcons'
import PokedexNavigation from './PokedexNavigation';
import FavoriteNavigation from './FavoriteNavigation'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName='Pokedex'>
        <Tab.Screen 
            name='Favorite' 
            component={FavoriteNavigation} 
            options={{
                tabBartLabel: 'Favoritos',
                tabBarIcon: ({color, size})=> 
                    <Icon name='star' color={color} size={size} />,
                
                headerTitle: "Favoritos",
                headerTitleAlign: 'center'

            }}
        />
        <Tab.Screen 
            name='Pokedex' 
            component={PokedexNavigation} 
            options={{
                tabBarLabel: 'Data',
                tabBarIcon: ({color,size}) => (
                    <Iconx name='pokemon-go' color={color} size={size} />
                ),
                headerShown: false,
                headerTitleAlign: 'center'
            }}    
        />
        <Tab.Screen 
            name='Account' 
            component={Account}
            options={{ 
                tabBarLabel: "Mi cuenta",
                tabBarIcon: ({color,size}) => (
                    <Icon name='user' color={color} size={size} />
                ),
                headerTitle: "Mi cuenta",
                headerTitleAlign: 'center'
            }}
        />
    </Tab.Navigator>
  )
}