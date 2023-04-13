import React from 'react';
import styled from 'styled-components';
import { PokemonStatsProps, StatsType } from './types';
import { FlexContainer, Typography } from '@/components/atoms';
import theme from '@/utils/theme';

const ComponentContainer = styled(FlexContainer)`
  border-radius: 10px;

  @media (max-width: 480px) {
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

const StyledContainer = styled(FlexContainer)`
@media (max-width: 480px) {
  width: 90%;
}
`;

const PokemonStats: React.FC<PokemonStatsProps> = ({ statsList, baseExperience }) => {
  return (
    <ComponentContainer
      width='100%'
      padding='20px'
      margin='20px 0'
      bgColor='#495057'
      resDirection='column'
      borderColor={theme.colors.darkBgColor}
    >
      <StyledContainer width='50%' direction='column'>
        <Typography
          color='#fff'
          fontSize='24px'
          fontWeight={700}
          textAlign='center'
          margin='10px 0'
          data-test-id="pokemon-experience"
        >
          Base Experience
        </Typography>
        <Typography color='#fff' fontSize='20px'>{baseExperience}</Typography>
      </StyledContainer>
      <StyledContainer width='50%' direction='column'>
        <Typography color='#fff' fontSize='24px' fontWeight={700} textAlign='center' margin='10px 0'>
          Stats
        </Typography>
        <StyledList>
          {statsList.map((stats: StatsType) => (
            <StyledListItem key={stats.stat.name}>
              {stats.stat.name}: {stats.base_stat}
            </StyledListItem>
          ))}
        </StyledList>
      </StyledContainer>
    </ComponentContainer>
  );
};

export default PokemonStats;