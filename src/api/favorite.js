import AsyncStorage from "@react-native-async-storage/async-storage";
import {includes, pull} from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavoriteApi(){
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response|| "[]")
    } catch (erro) {
        throw erro
    }
}


export async function addPokemonFavoriteApi (id){
    try {
        const favorites = await getPokemonsFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (erro) {
        throw erro;
    }
}


export async function isPokemonFavoriteApi(id){
    try {
        const response = await getPokemonsFavoriteApi();
        return includes(response, id);
    } catch (error) {
        throw error
    }
}

export async function removePokemonFavoriteApi(id){
    try {
        const favorites = await getPokemonsFavoriteApi(id);
        const newFavorites = pull(favorites, id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch (error) {
        throw error
    }
}