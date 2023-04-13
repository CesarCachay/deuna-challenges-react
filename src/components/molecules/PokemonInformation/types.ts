export type PokemonInformationProps = {
  height: number;
  weight: number;
  abilities: Array<AbilityType>;
  moves: Array<any>
}

type AbilityType = {
  ability: {
    name: string;
    url: string;
  }
  is_hidden: boolean;
  slot: number
}
