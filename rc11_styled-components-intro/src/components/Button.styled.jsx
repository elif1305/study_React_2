import styled from 'styled-components';

const Button = styled.button`
  /* color: ${(props) => (props.primary ? 'white' : 'purple')}; */
  color: ${({ primary }) => (primary ? 'white' : 'purple')};
  background: ${(props) => (props.primary ? 'purple' : 'white')};
  cursor: pointer;
  padding: 0.7rem 1.5rem;
  border: 2px solid purple;
  border-radius: 5px;
  font-family: 'tahoma';
  &:hover {
    transform: scale(0.97);
  }
`;

export const TomatoButton = styled(Button)`
  color: ${({ primary }) => (primary ? 'white' : 'tomato')};
  background: ${({ primary }) => (primary ? 'tomato' : 'white')};
  border: 2px solid tomato;
`;

export default Button;
