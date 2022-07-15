import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';
import { Link } from 'react-router-dom';

const Nav = styled(Flex)`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
`;



// logoyu burada direk export ile gonderdik. cunku sadece bir kez export-default yapabliriz. logoyu navbar da import ederken suslu parantez icinde yazcagiz.
export const Logo = styled(Link)`   // ustune tiklandiginda link ozelligi gostermesi icin link ten turerildi. yukarda link import edildi.
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const Hamburger = styled.div`
  display: none; // cunku basta gorunmuyor.
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};

  // bu hamburger iconki ne zamandan beri gozukecek;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;


// ilk basta olusturudugumuz flexten turetildi.
export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;    // elementleri altalta almak icin
    width: 100%;    // tamamini kapsamasi icin
    max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};   //isopen varsa bunu 400 yap yoksa 0 yap
    overflow: hidden;  // tasanlari saklamak icin 
    transition: max-height 0.3s ease-in;
  }
`;


// link ozeilligi gostermesi icin linkten turetildi.
export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
    width: 100%;
  }
`;
export default Nav;
