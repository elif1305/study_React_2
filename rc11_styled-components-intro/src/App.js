import Button, { TomatoButton } from './components/Button.styled';
// Button export default ile geldigi icin suslu parantez kullanimi yok, TomatoButton Button.styled.jsx ten exportla geldigi icin suslu parantez icinde desct. yapilmasi gerekir.
import Container from './components/Container.styled';
import HeaderText from './components/Header.styled';
import StyledLink from './components/Link.styled';

const App = () => {
  return (
    <>
      <Container bg="green">
        <HeaderText>STYLED COMPONENTS</HeaderText>
        {/* butona a primary propu verdik, Button.jsx de fonsk yazmak icin. primary = primary={true}. yani false yazilmadikca true olarak alir. */}
        <Button primary>Click</Button>      
        <Button>Click</Button>
        <TomatoButton>Click</TomatoButton>
        <TomatoButton primary>Click</TomatoButton>
        <HeaderText color="white">STYLED COMPONENTS</HeaderText>
        {/* color rengi white verildigi icin onu gosterir, verilmezse yukardaki gibi hotpink i gosterir. */}

        <StyledLink href="https://google.com/" target="_blank">
          Google
        </StyledLink>

        <StyledLink secondary href="https://google.com/" target="_blank">
          Google
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
