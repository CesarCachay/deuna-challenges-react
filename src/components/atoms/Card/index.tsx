import styled from 'styled-components';
import { CardProps } from './types';

const Card = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width || 'auto'};
  padding: ${(props) => props.padding || '20px'};
  margin: ${(props) => props.margin || '0'};
  background-color: #ffffff;
  box-shadow: ${(props) =>
    props.shadowLow
      ? '4px 4px 5px 0 rgba(0, 0, 0, 0.07)'
      : '50px 50px 100px 0 rgba(0, 0, 0, 0.07)'};
  ${(props) => props.rounded && 'border-radius: 8px; overflow: hidden;'}
  &:hover {
    transition: 0.5s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Card;