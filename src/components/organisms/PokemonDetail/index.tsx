import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetailData } from '@/services';
import { FlexContainer } from '@/components/atoms';
import { ErrorStateType } from '@/helpers/types';
import { PokemonInformation, PokemonProfile } from '@/components/molecules';
import styled from 'styled-components';

const DataContainer = styled(FlexContainer)`
@media (max-width: 400px) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%
}
`;

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
      {errorData.hasError && <div>{errorData.message}</div>}
      {isLoading ? (
        <div data-cy='loading-text'>Loading pokemon detail ...</div>
      ) : (
        <FlexContainer width='90%' resDirection='column'>
          <DataContainer width='50%'>
            <PokemonProfile
              id={pokemonData.id}
              name={pokemonData.name}
              pokemonPicture={pokemonData.sprites?.other['official-artwork'].front_default}
              types={pokemonData.types}
            />
          </DataContainer>
          <DataContainer width='50%'>
            <PokemonInformation
              height={pokemonData.height}
              weight={pokemonData.weight}
              abilities={pokemonData.abilities}
              moves={pokemonData.moves}
            />
            {/* <Typography>Stats</Typography>
            {pokemonData.stats.map(data => (
              <div key={data.stat.name}>
                <div>{data.base_stat}</div>
                <div>{data.stat.name}</div>
              </div>
            ))} */}
          </DataContainer>
        </FlexContainer>
      )
      }
    </FlexContainer >
  );
};

export default PokemonDetail;