import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite'


export default function Favorite(props) {
    const { id } = props;
    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false);
    const Icon = isFavorite ? FontAwesome: FontAwesome5

    useEffect(()=>{
        (async()=>{
            try {
                const response = await isPokemonFavoriteApi(id);
                setIsFavorite(response);
            } catch (error) {
                setIsFavorite(false)
            }
        })();
    },[id, reloadCheck])


    const onReloadCheckFavorite = ()=>{
        setReloadCheck((prev)=>!prev);
    }

    const addFavorite = async() =>{
        try {
            await addPokemonFavoriteApi(id)
            
    console.log(isFavorite);
            onReloadCheckFavorite();    
        } catch (error) {
            console.log(error);
        }
    }


    const removeFavorite = async()=>{
        try {
            await removePokemonFavoriteApi(id);
            onReloadCheckFavorite();
        } catch (error) {
            console.log(error);
        }
    }

    console.log(isFavorite);

    return (
    
    <Icon
        name='heart'
        color="#fff"
        size={20}
        onPress={isFavorite ? removeFavorite : addFavorite}
        style={{marginRight: 20}}
    />
  )
}