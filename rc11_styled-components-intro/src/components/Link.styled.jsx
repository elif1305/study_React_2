import styled, { css } from 'styled-components';

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: white;
  &:hover {
    opacity: 0.5;
  }
  ${(props) =>
    props.secondary &&
    css`  //css ile birden fazla deger verebliyoruz., yukarda import edilmesi gerekir unutma.
      background-color: yellow;
      border-radius: 5px;
      padding: 0.2rem;
      color: black;
    `}
`;

export default StyledLink;
