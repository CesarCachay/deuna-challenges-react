import styled from 'styled-components';
import { PillProps } from './types';

const Pill = styled.span<PillProps>`
  border-radius: 30px;
  white-space: nowrap;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  background-color: ${(props) => props.bgColor || props.theme.colors.bgColor};
  color: ${(props) => props.textColor || props.theme.colors.textPrimary};
  padding: ${(props) => props.padding || '5px 15px'};
  margin: ${(props) => props.margin || '0'};
  font-size: ${(props) => props.fontSize || '15px'};
  ${(props) => props.clickable && 'cursor: pointer;'}
`;

export default Pill;