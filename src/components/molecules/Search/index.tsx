import React from 'react';
import styled from 'styled-components';
import { Input } from '@/components/atoms';
import { SearchProps } from './types';

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Search: React.FC<SearchProps> = ({
  onChangeValue,
  searchValue,
  onSubmit,
  width,
  height,
  placeholder,
}) => {
  return (
    <StyledInput>
      <Input
        color='primary'
        placeholder={placeholder}
        value={searchValue}
        onChange={({ target }) => onChangeValue(target.value)}
        width={width || '100%'}
        height={height}
        style={{ padding: '0 0 0 50px' }}
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            onSubmit();
          }
        }}
      />
    </StyledInput>
  );
};

export default Search;
