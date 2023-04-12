import React, { useEffect, useState } from 'react';
import { PokemonList } from "@/components/organisms";
import { Pagination } from "@/components/molecules";
import { FlexContainer, Typography, Spinner } from "@/components/atoms";
import { getPokemons } from '@/services';
import { PokemonType, ErrorStateType } from '@/helpers/types';
import { pokemonFormatter, getNumberOfPages } from '@/helpers/functions';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState();
  const [pokemonList, setPokemonList] = useState<Array<PokemonType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorState, setErrorState] = useState<ErrorStateType>({
    hasError: false,
    message: null
  });

  useEffect(() => {
    getPokemons(page)
      .then(res => {
        if (res) {
          const { count, results } = res;
          const numbers = getNumberOfPages(count);
          const formattedResults = pokemonFormatter(results)
          setNumberOfPages(numbers)
          setPokemonList(formattedResults);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setErrorState({ hasError: true, message: err.message });
      })
  }, [page]);


  return (
    <FlexContainer
      container
      alignItems='center'
      direction='column'
      bgColor='#fff'
    >
      {errorState.hasError && <Typography>{errorState.message}</Typography>}
      {isLoading ? (
        <Spinner />
      ) : (
        <PokemonList pokemonList={pokemonList} />
      )}
      <Pagination page={page} numberOfPages={numberOfPages} setPage={setPage} />
    </FlexContainer>
  );
};

export default Home;