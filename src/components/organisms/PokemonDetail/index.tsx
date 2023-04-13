import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPokemonDetailData } from '@/services';
import { FlexContainer, Typography } from '@/components/atoms';
import { ErrorStateType } from '@/helpers/types';
import styled from 'styled-components';
import { PokemonProfile } from '@/components/molecules';
import theme from '@/utils/theme';

const PokemonDetail: React.FC = () => {
  const pathId = useParams();
  const pokemonId = pathId.id;
  const [pokemonData, setPokemonData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorData, setErrorData] = useState<ErrorStateType>({
    hasError: false,
    message: null
  });

  useEffect(() => {
    if (pokemonId) {
      getPokemonDetailData(pokemonId)
        .then(res => {
          if (res) {
            setPokemonData(res);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          setErrorData({ hasError: true, message: err.message });
        })
    }
  }, [])

  return (
    <FlexContainer
      container
      direction='column'
      bgColor='#fff'
      justify='center'
      alignItems='center'
    >
      <Link to='/'>Go back</Link>
      {errorData.hasError && <div>{errorData.message}</div>}
      {isLoading ? (
        <div data-cy='loading-text'>Loading pokemon detail ...</div>
      ) : (
        <FlexContainer width='90%'>
          <FlexContainer width='50%'>
            <PokemonProfile
              id={pokemonData.id}
              name={pokemonData.name}
              pokemonPicture={pokemonData.sprites?.other['official-artwork'].front_default}
              types={pokemonData.types}
            />
          </FlexContainer>
          <FlexContainer width='50%'>
            <Typography>Height</Typography>
            <span>{pokemonData.height}</span>
            <Typography>Weight</Typography>
            <span>{pokemonData.weight}</span>
            <Typography>Abilities</Typography>
            {pokemonData.abilities.map(data => (
              <div key={data.slot}>
                <div>{data.ability.name}</div>
              </div>
            ))}
            <Typography>Stats</Typography>
            {pokemonData.stats.map(data => (
              <div key={data.stat.name}>
                <div>{data.base_stat}</div>
                <div>{data.stat.name}</div>
              </div>
            ))}
            <Typography>Moves</Typography>
            {pokemonData.moves.map(data => (
              <div key={data.move.name}>{data.move.name}</div>
            ))}
          </FlexContainer>
        </FlexContainer>
      )
      }
    </FlexContainer >
  );
};

export default PokemonDetail;