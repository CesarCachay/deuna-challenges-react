import React from 'react';
import { Card, Typography } from '@/components/atoms';
import { Link } from 'react-router-dom';

type PokemonCardType = {
  name: string;
  parsedId: string;
  id: string;
  picture: string
}

const PokemonCard: React.FC<PokemonCardType> = ({ name, parsedId, id, picture }) => {
  return (
    <Card shadowLow width='300px'>
      <Link to={`/pokemon/${id}`} >
        <img src={picture} alt={name} />
      </Link>
      <Typography>{parsedId}</Typography>
      <Typography>{name}</Typography>
    </Card>
  );
};

export default PokemonCard;