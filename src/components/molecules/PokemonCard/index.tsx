import React from 'react';
import { Typography, Card, FlexContainer } from '@/components/atoms';
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
  const formatPokemonName = (name: string) => {
    const formatted = name.charAt(0).toUpperCase() + name.slice(1);
    return formatted;
  };

  return (
    <Link to={`/pokemon/${id}`} >
      <StyledPokemonCard shadowLow width='300px'>
        <StyledPokemonImage src={picture} alt={name} />
        <FlexContainer width='85%' justify='space-around'>
          <Typography>{parsedId}</Typography>
          <Typography>{formatPokemonName(name)}</Typography>
        </FlexContainer>
      </StyledPokemonCard>
    </Link>
  );
};

export default PokemonCard;