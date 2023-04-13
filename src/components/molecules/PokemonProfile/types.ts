export type PokemonProfileProps = {
  name: string;
  id: string;
  pokemonPicture: string;
  types: Array<PokemonDataTypes>;
}

export type PokemonDataTypes = {
  slot: number
  type: {
    name: string;
    url: string;
  }
}