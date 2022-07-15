import Nav, { Logo, Menu, MenuLink, Hamburger } from './Navbar.style';
// Nav burada export-default olarak gonderildigi icin suslu icine yazilmadi. digerleri export ile gonderdildigi icin susulu parantez icinde yazildi.
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // hamburgere tiklandiginda menuyu acmak icin

  return (
    <Nav justify="space-between" wrap="wrap">
      {/* // logo to yazildi link ozelliginden dolayi. */}
      <Logo to="/">  
        <i>{'<EK/>'}</i>
        <span>Recipe</span>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>  //
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>     // menu acildiginda , icinden birine tiklandginda menuyu kapatmasi icin. bubling . yani asagidakilerden birine tiklnadiginda menuyu kapatacak.
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="login" onClick={() => sessionStorage.clear()}>  // session dtorage i silmek icin.
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
