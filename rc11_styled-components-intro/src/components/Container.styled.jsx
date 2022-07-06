import styled from 'styled-components';


//shorthand es.....
const Container = styled.div`
  /* background: ${(props) => props.bg || 'white'}; */
  /* bg varsa bg a ata , yoksa beyaz yap demek alttakinin aciklmasi */
  background: ${({ bg }) => bg || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.7rem;
`;

export default Container;
