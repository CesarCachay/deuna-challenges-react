export type PokemonStatsProps = {
  statsList: Array<StatsType>;
  baseExperience: number;
}

export type StatsType = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}