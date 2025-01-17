import React from 'react';
import { PokemonCard } from '@/components/molecules';
import { FlexContainer } from "@/components/atoms";
import { PokemonType } from '@/helpers/types';
import styled from 'styled-components';
import { PokemonListProps } from './types';

const PokemonListContainer = styled(FlexContainer)`
  padding-top: 20px;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
  return (
    <PokemonListContainer container data-cy='pokemon-list'>
      {pokemonList.length > 0 && pokemonList.map((pokemon: PokemonType) => (
        <React.Fragment key={pokemon.id}>
          <PokemonCard
            name={pokemon.name}
            parsedId={pokemon.parsedId}
            id={pokemon.id}
            picture={pokemon.picture}
          />
        </React.Fragment>
      ))}
    </PokemonListContainer>
  );
};

export default PokemonList;