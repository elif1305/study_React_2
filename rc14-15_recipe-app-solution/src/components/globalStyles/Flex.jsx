import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  // eger justify fiye bir prop olursa justfy i kullan eger yoksa center i kullan.
  align-items: ${({ align }) => (align ? align : 'center')};
  flex-wrap: ${({ wrap }) => wrap && wrap};
  // wrap yaziili ise wrap degerini buraya aktar.
`;

export default Flex;
