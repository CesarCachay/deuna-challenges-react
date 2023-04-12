import axios from 'axios';
import { pokemonFormatter } from '../helpers/functions';

const baseUrl = import.meta.env.VITE_POKEMON_BASE_URL;

export const getPokemons = async () => {
  try {
    const response = await axios.get(baseUrl);
    const pokemons = response.data.results;
    return pokemonFormatter(pokemons);
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonDetailData = async (pokemonId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/${pokemonId}/`);
    const pokemonData = response.data;
    return pokemonData;
  } catch (error) {
    console.error(error);
  }
}