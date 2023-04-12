import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ErrorStateType, getPokemonDetailData, pokemonIdFormatter } from '../services';

const PokemonDetail = () => {
  const id = useParams();
  const pokemonId = Object.values(id)[0];
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
      {isLoading ? (
        <div>Loading pokemon detail ...</div>
      ) : (
        <div>
          <div>
            <div>{pokemonData.name}</div>
            <div>{pokemonIdFormatter(pokemonData.id)}</div>
          </div>
          <div>
            <div>Height</div>
            <span>{pokemonData.height}</span>
            <div>Weight</div>
            <span>{pokemonData.weight}</span>
            <div>Types</div>
            {pokemonData.types.map((pokemonType: any) => (
              <div>
                <div>{pokemonType.type.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;