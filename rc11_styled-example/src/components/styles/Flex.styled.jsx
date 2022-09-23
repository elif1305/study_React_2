import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  & > div,             // flexin icindeki tum div lere asagida yazilanlari uygula demek
  & > ul {
    /*!Tüm elemanların buyumesine izin ver*/
    flex-grow: 1;
    /* Tüm div'lerin eşit miktarda alan tutabilmesine izin ver.*/
    flex-basis: 0;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Flex;
