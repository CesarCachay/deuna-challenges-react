import { PokemonType } from "./types";

export const getNumberOfPages = (count: number) => Math.ceil(count / 20);

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
      picture: getPicture,
    }
  })
  return formattedArray;
};

export const formatPokemonName = (name: string) => {
  const formatted = name.charAt(0).toUpperCase() + name.slice(1);
  return formatted;
};

export const getColorPokemonType = (text: string) => {
  switch (text) {
    case 'normal':
      return '#a8a77a';
    case 'fire':
      return '#ee8130';
    case 'water':
      return '#6390f0';
    case 'electric':
      return '#f7d02c';
    case 'grass':
      return '#7ac74c';
    case 'ice':
      return '#96d9d6';
    case 'fighting':
      return '#c22e28';
    case 'poison':
      return '#a33ea1';
    case 'ground':
      return '#e2bf65';
    case 'flying':
      return '#a98ff3';
    case 'psychic':
      return '#f95587';
    case 'bug':
      return '#a6b91a';
    case 'rock':
      return '#b6a136';
    case 'ghost':
      return '#735797';
    case 'dragon':
      return '#6f35fc';
    case 'dark':
      return '#705746';
    case 'steel':
      return '#b7b7ce';
    case 'fairy':
      return '#d685ad';
    default:
      return 'black';
  }
}