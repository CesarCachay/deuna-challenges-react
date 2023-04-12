import { useEffect, useState } from 'react';
import { getPokemons } from '@/services';
import { PokemonType, ErrorStateType } from '@/helpers/types';
import { PokemonCard } from '@/components/molecules';
import { FlexContainer, Typography } from "@/components/atoms";

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
    <FlexContainer container>
      {errorState.hasError && <Typography>{errorState.message}</Typography>}
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          {pokemonList.length > 0 && pokemonList.map(pokemon => (
            <div key={pokemon.id}>
              <PokemonCard
                name={pokemon.name}
                parsedId={pokemon.parsedId}
                id={pokemon.id}
                picture={pokemon.picture}
              />
            </div>
          ))}
        </div>
      )}
    </FlexContainer>
  );
};

export default PokemonList;