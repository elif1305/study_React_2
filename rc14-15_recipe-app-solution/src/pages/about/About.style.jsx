import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';

export const AboutContainer = styled(Flex)`
  flex-direction: column;
  min-height: calc(100vh - 80px);
  line-height: 2;
  span {
    color: white;
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  text-align: right;
  margin: 0 0.7rem;
  max-width: 1000px;
  border: 1px solid white;
  padding: 5rem;
  border-radius: 5px;
  a {
    color: white;
  }
`;
export const StyledImage = styled.img`
  width: 500px;
  margin-bottom: 2rem;
`;
