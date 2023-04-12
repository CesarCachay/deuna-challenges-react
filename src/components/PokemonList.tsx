import { useEffect, useState } from 'react';
import { getPokemons } from '../services';
import { PokemonType, ErrorStateType } from '../helpers/types';
import { PokemonCard } from './molecules';

const PokemonList = () => {
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
    <div>
      {errorState.hasError && <div>{errorState.message}</div>}
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
    </div>
  );
};

export default PokemonList;