import React from 'react';
import { PokemonCard } from '@/components/molecules';
import { FlexContainer } from "@/components/atoms";
import styled from 'styled-components';

const PokemonListContainer = styled(FlexContainer)`
  padding-top: 20px;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const PokemonList: React.FC = ({ pokemonList }) => {
  return (
    <PokemonListContainer container>
      {pokemonList.length > 0 && pokemonList.map(pokemon => (
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