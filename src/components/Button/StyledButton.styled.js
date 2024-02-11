import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(col) => {col.theme.body}};
  color: ${(col) => {col.theme.text}};
  border: 2px solid ${(col) => {col.theme.text}};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.25s linear;

  &:hover {
    background-color: ${(col) => {col.theme.text}};
    color: ${(col) => {col.theme.body}};
  }
`;

