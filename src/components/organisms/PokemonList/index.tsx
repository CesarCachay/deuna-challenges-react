import React, { useEffect, useState } from 'react';
import { getPokemons } from '@/services';
import { PokemonType, ErrorStateType } from '@/helpers/types';
import { PokemonCard } from '@/components/molecules';
import { FlexContainer, Typography } from "@/components/atoms";
import styled from 'styled-components';

const PokemonListContainer = styled(FlexContainer)`
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