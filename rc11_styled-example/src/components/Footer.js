import SocialIcons from './SocialIcons';
import Container from './styles/Container.styled';
import Flex from './styles/Flex.styled';
import StyledFooter from './styles/Footer.styled';
import { Logo } from './styles/Header.styled';

export default function Footer() { 
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <Logo src="./images/logo_white.png" alt="" />
        </Flex>

        <Flex>
          <ul>
            <li>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</li>
            <li> +1 (571) 360 66 77</li>
            <li>contact@clarusway.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
      </Container>
    </StyledFooter>
  );
}
