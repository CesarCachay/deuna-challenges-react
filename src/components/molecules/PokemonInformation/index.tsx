import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Typography } from '@/components/atoms';
import { PokemonInformationProps } from './types';
import theme from '@/utils/theme';

const ComponentContainer = styled(FlexContainer)`
  border-radius: 10px;

  @media (max-width: 400px) {
    width: 80%;
  }
`
const StyledList = styled.ul`
  margin: 0;
  padding: 9
`;

const StyledListItem = styled.li`
  color: #fff;
  font-size: 20px;
  margin: 4px;
  padding: 0;
`;

const PokemonInformation: React.FC<PokemonInformationProps> = (props) => {
  const { height, weight, abilities, moves } = props || {};

  const weightFormatter = (weight: number) => {
    const formatted = weight / 10;
    return `${formatted} Kg`;
  };

  const heightFormatter = (height: number) => {
    const formatted = height / 10;
    return `${formatted} Mts`
  }

  return (
    <ComponentContainer
      width='100%'
      margin='20px 0'
      bgColor='#495057'
      padding='20px'
      borderColor={theme.colors.darkBgColor}
    >
      <FlexContainer width='50%' direction='column'>
        <Typography color='#fff' fontSize='24px' fontWeight={700} textAlign='center' margin='10px 0'>
          Height
        </Typography>
        <Typography color='#fff' fontSize='20px'>{heightFormatter(height)}</Typography>
        <Typography color='#fff' fontSize='24px' fontWeight={700} textAlign='center' margin='55px 0 15px 0'>
          Weight
        </Typography>
        <Typography color='#fff' fontSize='20px'>{weightFormatter(weight)}</Typography>
      </FlexContainer>
      <FlexContainer width='50%' direction='column'>
        <Typography color='#fff' fontSize='24px' fontWeight={700} textAlign='center' margin='10px 0'>
          Abilities
        </Typography>
        <StyledList>
          {abilities.map(data => (
            <StyledListItem key={data.ability.name}>{data.ability.name}</StyledListItem>
          ))}
        </StyledList>
        <Typography
          color='#fff'
          fontSize='24px'
          fontWeight={700}
          textAlign='center'
          margin='10px 0'
          data-test-id="pokemon-moves-text"
        >
          Moves
        </Typography>
        <StyledList>
          {moves.slice(0, 4).map(data => (
            <StyledListItem key={data.move.name}>{data.move.name}</StyledListItem>
          ))}
        </StyledList>
      </FlexContainer>
    </ComponentContainer>
  );
};

export default PokemonInformation;