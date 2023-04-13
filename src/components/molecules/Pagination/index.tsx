import React from 'react';
import styled from 'styled-components';
import { Typography } from '@/components/atoms';
import { PaginationProps } from './types';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  margin-top: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center
  width: 100px;
  height: 35px;
  border-radius: 5px;
  background-color: rgba(54, 54, 54, 1);
  color: rgba(248, 248, 248, 1);

  &:active, &:hover {
    background-color: rgba(54, 54, 54, 0.9);
  }

  &[disabled] {
    opacity: 0.5;
    background-color: rgba(54, 54, 54, 1);
    cursor: initial;
  }
`;


const Pagination: React.FC<PaginationProps> = ({ page, numberOfPages, setPage }) => {
  return (
    <StyledFooter>
      <ButtonsContainer>
        <Link to={`/pokemons?page=${page - 1}`} onClick={() => setPage(page - 1)}>
          <StyledButton disabled={page === 1} data-cy="prev-button-option">
            Prev
          </StyledButton>
        </Link>
        <Link to={`/pokemons?page=${page + 1}`} onClick={() => setPage(page + 1)}>
          <StyledButton disabled={page === numberOfPages} data-cy="next-button-option">
            Next
          </StyledButton>
        </Link>
      </ButtonsContainer>
      <Typography fontWeight={700} margin='10px 0 20px 0'>
        <span>{`Page ${page}`}</span>
        {numberOfPages && <span>{`/${numberOfPages}`}</span>}
      </Typography>
    </StyledFooter >
  );
};

export default Pagination;