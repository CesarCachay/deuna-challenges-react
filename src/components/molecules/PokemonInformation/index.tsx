import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Typography } from '@/components/atoms';
import { PokemonInformationProps } from './types';
import theme from '@/utils/theme';

const ComponentContainer = styled(FlexContainer)`
  border-radius: 10px;
`
const PokemonInformation: React.FC<PokemonInformationProps> = (props) => {
  const { height, weight, abilities, is_default, moves } = props || {};

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
        <Typography>{heightFormatter(height)}</Typography>
        <Typography color='#fff' fontSize='24px' fontWeight={700} textAlign='center' margin='10px 0'>
          Weight
        </Typography>
        <Typography>{weightFormatter(weight)}</Typography>
      </FlexContainer>
      <FlexContainer width='50%' direction='column'>
        <Typography color='#fff' fontSize='24px' fontWeight={700} textAlign='center' margin='10px 0'>
          Is Default
        </Typography>
        <Typography>{is_default ? 'Yes' : 'No'}</Typography>
        <Typography color='#fff' fontSize='24px' fontWeight={700} textAlign='center' margin='10px 0'>
          Abilities
        </Typography>
        {abilities.map(data => (
          <Typography key={data.slot}>{data.ability.name}</Typography>
        ))}
      </FlexContainer>
    </ComponentContainer>
  );
};

export default PokemonInformation;