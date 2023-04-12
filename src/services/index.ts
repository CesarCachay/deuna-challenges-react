import axios from 'axios';

const baseUrl = import.meta.env.VITE_POKEMON_BASE_URL;

export type PokemonType = {
  id: string;
  parsedId: string;
  name: string;
  url: string;
  picture: string;
}

export type ErrorStateType = {
  hasError: boolean;
  message: null | string;
}

export const pokemonIdFormatter = (pokemonId: string) => {
  const formattedId = Number(pokemonId);
  if (formattedId <= 9) return `#000${pokemonId}`;
  if (formattedId <= 99) return `#00${pokemonId}`;
  if (formattedId <= 999) return `#0${pokemonId}`;
  return `#${pokemonId}`;
};

const pokemonFormatter = (pokemonList: Array<PokemonType>) => {
  const formattedArray = pokemonList.map(pokemonData => {
    const { name, url } = pokemonData || {};
    const pokemonId = pokemonData.url.split('/')[6];
    const getPicture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    return {
      id: pokemonId,
      parsedId: pokemonIdFormatter(pokemonId),
      name,
      url,
      picture: getPicture
    }
  })
  return formattedArray;
};

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