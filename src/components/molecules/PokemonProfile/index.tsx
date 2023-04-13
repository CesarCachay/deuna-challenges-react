import styled from 'styled-components';
import { FlexContainer, Typography } from '@/components/atoms';
import { pokemonIdFormatter, formatPokemonName } from '@/helpers/functions';
import { PokemonProfileProps, PokemonDataTypes } from './types'
import theme from '@/utils/theme';

const ComponentContainer = styled(FlexContainer)`
  border-radius: 10px;
`

const StyledPokemonImage = styled.img`
  width: 400px;
  height: 400px
`;

const InformationContainer = styled(FlexContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 14px 12px;
`;

const PokemonTypePill = styled(FlexContainer)`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: black;
`;

const PokemonProfile: React.FC<PokemonProfileProps> = ({ name, id, pokemonPicture, types }) => {
  return (
    <ComponentContainer
      container
      margin='20px 0'
      bgColor='#495057'
      borderColor={theme.colors.darkBgColor}
    >
      <InformationContainer>
        <FlexContainer direction='column'>
          <Typography fontSize='24px' fontWeight={700} textAlign='center' margin='10px 0'>
            {formatPokemonName(name)}
          </Typography>
          <Typography fontSize='20px' fontWeight={700} textAlign='center' margin='10px 0'>
            {pokemonIdFormatter(id)}
          </Typography>
        </FlexContainer>
        <StyledPokemonImage
          src={pokemonPicture}
          alt={name}
        />
        <FlexContainer width='95%' justify='space-around'>
          {types.map((pokemonType: PokemonDataTypes) => (
            <PokemonTypePill key={pokemonType.slot}>
              <Typography
                fontSize='20px'
                fontWeight={700}
                textAlign='center'
                margin='10px 0'
                color='#fff'
              >
                {pokemonType.type.name.toUpperCase()}
              </Typography>
            </PokemonTypePill>
          ))}
        </FlexContainer>
      </InformationContainer>
    </ComponentContainer>
  );
};

export default PokemonProfile;