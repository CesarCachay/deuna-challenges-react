import React, { useEffect, useState } from 'react';
import { getPokemons } from '@/services';
import { PokemonType, ErrorStateType } from '@/helpers/types';
import { PokemonCard } from '@/components/molecules';
import { FlexContainer, Typography } from "@/components/atoms";
import styled from 'styled-components';

const PokemonListContainer = styled(FlexContainer)`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Array<PokemonType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorState, setErrorState] = useState<ErrorStateType>({
    hasError: false,
    message: null
  });

  useEffect(() => {
    getPokemons()
      .then(res => {
        if (res?.length) {
          setPokemonList(res);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setErrorState({ hasError: true, message: err.message });
      })
  }, []);

  return (
    <PokemonListContainer container>
      {errorState.hasError && <Typography>{errorState.message}</Typography>}
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </PokemonListContainer>
  );
};

export default PokemonList;