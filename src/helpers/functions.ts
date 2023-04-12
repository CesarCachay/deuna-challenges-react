import { PokemonType } from "./types";

export const pokemonIdFormatter = (pokemonId: string) => {
  const formattedId = Number(pokemonId);
  if (formattedId <= 9) return `#000${pokemonId}`;
  if (formattedId <= 99) return `#00${pokemonId}`;
  if (formattedId <= 999) return `#0${pokemonId}`;
  return `#${pokemonId}`;
};

export const pokemonFormatter = (pokemonList: Array<PokemonType>) => {
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