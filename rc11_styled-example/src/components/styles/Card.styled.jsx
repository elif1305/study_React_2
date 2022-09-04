import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap: 2rem;
  padding: 60px;
  flex-direction: ${({ odd }) => odd || 'row'};
  img {
    width: 80%;
  }

  & > div {
    /*Tüm elemanların buyumesine izin ver*/
    flex-grow: 1;
    /* Tüm div'lerin eşit miktarda alan tutabilmesine izin ver.*/
    flex-basis: 0;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export default StyledCard;
