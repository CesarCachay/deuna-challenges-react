import axios from 'axios';

const baseUrl = import.meta.env.VITE_POKEMON_BASE_URL;

export const getPokemons = async (page: number) => {
  try {
    const offset = page * 20;
    const response = await axios.get(`${baseUrl}/?offset=${offset}`);
    const data = response.data
    return data;
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