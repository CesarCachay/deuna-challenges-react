import styled from 'styled-components';
import { ButtonProps } from './types';

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 'auto'};
  ${(props) => props.height && `height: ${props.height};`};
  border: ${(props) => (props.border ? `1px solid ${props.border}` : 'none')};
  border-radius: 5px;
  cursor: pointer;
  font-size: ${(props) => props.fontSize || '14px'};
  color: ${(props) => props.color || '#ffffff'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  ${(props) => props.bgColor && `background-color: ${props.bgColor};`}
  &:focus {
    outline: none;
  }
  &:hover {
    ${(props) => props.hover && `background-color: ${props.hover};`}
  }
`;

export default Button;