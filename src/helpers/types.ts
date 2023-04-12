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