import React from 'react';
import { Typography, Card } from '@/components/atoms';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type PokemonCardType = {
  name: string;
  parsedId: string;
  id: string;
  picture: string
}

const StyledPokemonCard = styled(Card)`
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 4px;
  padding: 10px;
  height: 130px;
  width: 300px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transition: 0.5s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledPokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;


const PokemonCard: React.FC<PokemonCardType> = ({ name, parsedId, id, picture }) => {
  return (
    <StyledPokemonCard shadowLow width='300px'>
      <Link to={`/pokemon/${id}`} >
        <StyledPokemonImage src={picture} alt={name} />
      </Link>
      <Typography>{parsedId}</Typography>
      <Typography>{name}</Typography>
    </StyledPokemonCard>
  );
};

export default PokemonCard;