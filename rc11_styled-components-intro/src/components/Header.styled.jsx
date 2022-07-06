import styled from 'styled-components';

const HeaderText = styled.h1`
  color: ${({ color }) => color || 'hotpink'};
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export default HeaderText;
