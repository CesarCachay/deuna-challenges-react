import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPokemonDetailData } from '@/services';
import { pokemonIdFormatter } from '@/helpers/functions';
import { ErrorStateType } from '@/helpers/types';

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
    <div>
      <Link to='/'>Go back</Link>
      {errorData.hasError && <div>{errorData.message}</div>}
      {isLoading ? (
        <div>Loading pokemon detail ...</div>
      ) : (
        <div>
          <div>
            <div>{pokemonData.name}</div>
            <div>{pokemonIdFormatter(pokemonData.id)}</div>
          </div>
          <div>
            <div>
              <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            </div>
            <div>Height</div>
            <span>{pokemonData.height}</span>
            <div>Weight</div>
            <span>{pokemonData.weight}</span>
            <div>Types</div>
            {pokemonData.types.map((pokemonType: any) => (
              <div key={pokemonType.type.name}>
                <div>{pokemonType.type.name}</div>
              </div>
            ))}
            <div>Abilities</div>
            {pokemonData.abilities.map(data => (
              <div key={data.slot}>
                <div>{data.ability.name}</div>
              </div>
            ))}
            <div>Stats</div>
            {pokemonData.stats.map(data => (
              <div key={data.stat.name}>
                <div>{data.base_stat}</div>
                <div>{data.stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      )
      }
    </div >
  );
};

export default PokemonDetail;